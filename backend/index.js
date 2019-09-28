const fs = require('fs')
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const uuidv1 = require('uuid/v1');

const app = express()
app.use(cors())
app.use(bodyparser.json())

let events = JSON.parse(fs.readFileSync('db.json'))
    .map((event) => {
        return {
            ...event,
            id : uuidv1()  
        }
    });

app.get('/api/events', (request, response) => {
    response.json(events)
})

app.get('/api/events/:id', (request, response) => {
    const id = request.params.id
    response.json(events.find(event => event.id === id))
})

// TODO ADD UPVOTES


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

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`App started, listening on port ${PORT}!`))