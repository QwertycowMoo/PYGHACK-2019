import axios from 'axios'

const allEvents = () => axios
    .get("/api/events")
    .then(response => response.data)
    .catch(error => console.error(error))

const getEvent = id => axios
    .get(`/api/events/${id}`)
    .then(response => response.data)
    .catch(error => console.error(error))

const createEvent = event => axios
    .post(`/api/events`, event)
    .then(response => response.data)
    .catch(error => console.error(error))

const updateEvent = event => axios
    .put(`/api/events/${event.id}`, event)
    .then(response => response.data)
    .catch(error => console.error(error))

const deleteEvent = (event) => axios
    .delete(`/api/events/${event.id}`)
    .then(response => response.data)
    .catch(error => console.error(error))

export default { allEvents, getEvent, createEvent, updateEvent, deleteEvent }