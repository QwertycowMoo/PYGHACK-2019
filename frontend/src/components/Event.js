import React from 'react'

const Event = ({ event }) => {
    return <li key={event.id}>
    <div>
        <p>Name: {event.name}</p>
        <p>Start Date: {event['start-date']}</p>
        <p>End Date: {}</p>
    </div>
    </li >
}


export default Event