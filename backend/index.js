const fs = require('fs')
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const uuidv1 = require('uuid/v1');

const app = express()
app.use(cors())
app.use(bodyparser.json())

let { events, proposals } = (() => {
    let { events, proposals } = JSON.parse(fs.readFileSync('db.json'))
    events = events.map(event => {
        return {
            ...event,
            id: uuidv1()
        }
    });
    proposals = proposals.map(proposal => {
        return {
            ...proposal,
            id: uuidv1()
        }
    });
    return { events, proposals }
})();

app.get('/api/events', (request, response) => {
    response.json(events)
})

app.get('/api/events/:id', (request, response) => {
    const id = request.params.id
    response.json(events.find(event => event.id === id))
})

app.post('/api/events', (request, response) => {
    const body = request.body

    let newEvent = {
        name: body.name,
        location: body.location,
        time: body.time,
        date: body.date,
        description: body.description,
        id: uuidv1()
    }

    events = events.concat(newEvent)

    response.status(201).send(newEvent)
})

app.get('/api/proposals', (request, response) => {
    response.json(proposals)
})

app.get('/api/proposals/:id', (request, response) => {
    const id = request.params.id
    response.json(proposals.find(proposal => proposal.id === id))
})

app.post('/api/proposals', (request, response) => {
    const body = request.body
    
    const newProposal = {
        name: body.name,
        category: body.category,
        time: body.time,
        expiresBy: String(new Date(new Date().setFullYear(new Date().getFullYear() + 1))),
        description: body.description,
        upvotes: 0,
        id: uuidv1()
    }

    proposals = proposals.concat(newProposal)

    response.status(201).json(newProposal)
})

app.patch('/api/proposals/:id', (request, response) => {
    const id = request.params.id
    const body = request.body

    foundProposalRef = proposals.find(proposal => proposal.id === id)
    foundProposalRef.upvotes += 1 // TODO THIS ISN'T WORKING, not REST like

    response.json(foundProposalRef) 
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`App started, listening on port ${PORT}!`))