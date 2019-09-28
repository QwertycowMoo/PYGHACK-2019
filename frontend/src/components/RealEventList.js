import React from 'react'
import Event from './Event'

const RealEventList = ({ events }) => {
    return <div>
        <h2>Events</h2>
        <ul>
            {events.map(event => <Event key={event.id} event={event} />)}
        </ul>
    </div>
}

export default RealEventList