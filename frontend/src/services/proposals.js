import axios from 'axios'

const allProposals = () => axios
    .get('/proposals')
    .then(response => response.data)
    .catch(error => console.error(error))

const getProposal = id => axios
    .get(`/proposals/${id}`)
    .then(response => response.data)
    .catch(error => console.error(error))

const createProposal = proposal => axios
    .get('/proposals', proposal)
    .then(response => response.data)
    .catch(error => console.error(error))

const updateProposal = proposal => axios
    .put(`/proposals/${proposal.id}`, proposal)
    .then(response => response.data)
    .catch(error => console.error(error))

const upvoteProposal = proposal => axios
    .patch(`/proposals/${proposal.id}`)
    .then(response => response.data)
    .catch(error => console.error(error))

const deleteProposal = proposal => axios
    .delete(`/proposals/${proposal.id}`)
    .then(response => response.data)
    .catch(error => console.error(error))

export default {allProposals, getProposal, createProposal, updateProposal, upvoteProposal, deleteProposal}