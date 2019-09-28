import React from 'react'
import Event from './Event'

/*class RealProposalList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events : props.events
        }
        console.log("EventList constructor", props.events, this.state.events)
    }

    render() {
        return ( <div id="events">
            <h2>Events</h2>
            <ul>
            {this.state.events.map(event => <Event event={event}/>)}
            </ul>
        </div>
        )
    }
} */



const RealProposalList = ({ proposals }) => {
    return <div>
        <h2>Proposals</h2>
        <ul>
            {proposals.map(proposal => <Event key={proposal.id} event={proposal} />)}
        </ul>
    </div>
}
export default RealProposalList