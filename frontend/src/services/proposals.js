import axios from 'axios'

const allProposals = () => axios
    .get('/api/proposals')
    .then(response => response.data)
    .catch(error => console.error(error))

const getProposal = id => axios
    .get(`/api/proposals/${id}`)
    .then(response => response.data)
    .catch(error => console.error(error))

const createProposal = proposal => axios
    .get('/api/proposals', proposal)
    .then(response => response.data)
    .catch(error => console.error(error))

const updateProposal = proposal => axios
    .put(`/api/proposals/${proposal.id}`, proposal)
    .then(response => response.data)
    .catch(error => console.error(error))

const upvoteProposal = proposal => axios
    .patch(`/api/proposals/${proposal.id}`)
    .then(response => response.data)
    .catch(error => console.error(error))

const deleteProposal = proposal => axios
    .delete(`/api/proposals/${proposal.id}`)
    .then(response => response.data)
    .catch(error => console.error(error))

export default {allProposals, getProposal, createProposal, updateProposal, upvoteProposal, deleteProposal}