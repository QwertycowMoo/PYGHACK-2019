import React from 'react'

const Event = ({ event }) => {
    const style = {
        border: '2px solid blue'
    }


    return <li key={event.id} style={style}>
    <div>
        <p>Name: {event.name}</p>
        <p>Start Date: {event['start-date']}</p>
        <p>End Date: {}</p>
    </div>
    </li >
}


export default Event