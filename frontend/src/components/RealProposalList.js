import React from 'react'
import Event from './Event'

const RealProposalList = ({ proposals }) => {
    return <div>
        <h2>Proposals</h2>
        <ul>
            {proposals.map(proposal => <Event key={proposal.id} event={proposal} />)}
        </ul>
    </div>
}
export default RealProposalList