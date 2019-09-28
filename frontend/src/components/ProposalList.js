import React from 'react'
import Event from './Event'

const ProposalList = ({ events }) => {
    return <div>
        <h2>Proposals</h2>
        <ul>
            {events.map(event => <Event key={event.id} event={event} />)}
        </ul>
    </div>
}

export default ProposalList