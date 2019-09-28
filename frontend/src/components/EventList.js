import React from 'react'
import Event from './Event'

class EventList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events : props.events
        }
        console.log("EventList constructor", props.events, this.state.events)
    }

    render() {
        return <div id="events">
            <h2>Events</h2>
            <ul>
                {this.state.events.map(event => <Event event={event} />)}
            </ul>
        </div>
    }
}

export default EventList