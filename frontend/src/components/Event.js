import React from 'react'

const Event = ({ event }) => {
    return <li key={event.id}>
    <div>
        <p>Name: {event.name}</p>
        <p>When: {event.time} {event.date}</p>
    </div>
    </li >
}


export default Event