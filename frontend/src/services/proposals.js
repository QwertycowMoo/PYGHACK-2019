import axios from 'axios'

const allProposals = () => axios
    .get('/proposals')
    .then(response => response.data)
    .catch(error => console.error(error))

export default {allProposals}