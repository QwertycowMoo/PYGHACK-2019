import axios from 'axios'

const allEvents = () => axios
    .get("/events")
    .then(response => response.data)
    .catch(error => console.error(error))

const getEvent = id => axios
    .get(`/events/${id}`)
    .then(response => response.data)
    .catch(error => console.error(error))

const createEvent = event => axios
    .post(`/events`, event)
    .then(response = response.data)
    .catch(error => console.error(error))

const updateEvent = event => axios
    .put(`/events/${event.id}`, event)
    .then(response => response.data)
    .catch(error => console.error(error))

const deleteEvent = (event) => axios
    .delete(`/events/${event.id}`)
    .then(response => response.data)
    .catch(error => console.error(error))

export default { allEvents, getEvent, createEvent, updateEvent, deleteEvent }