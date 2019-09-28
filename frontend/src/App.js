import React, { useState, useEffect } from 'react'
import FuzzySearch from 'fuzzy-search'

import './App.css';

import eventService from './services/events'

import SearchBar from './components/SearchBar'
import ProposalList from './components/ProposalList'
import VerticalBar from './components/VerticalBar'
import EventList from './components/EventList'

// ?Name of event (String)
// Category (Drop down)
// Tags (String[])
// Month (Implicit year, Only in between now and a year from now)
// Submittd by / Author (Pulled from user submission)
// Description (String)
const proposalsMockData = [
  {
    "id": 1,
      "name": "La la land",
      "category": "free",
      "tags": [
          "free",
          "music"
      ],
      "daterange": "2019-09-28T15:57:38.076Z/2019-09-28T15:57:38.076Z",
      "author": "georgepantazes@gmail.com",
      "description": "Chocolate tasting and confetti throwing."
  }
]

function App() {
  // const fullArray = useState([])
  // if(fullArray.length === 2) { true )}
  // evnts = fullArray[0]
  // setEvents = fullArray[1]

  // const [numTimesRendered, setNumTimesRendered] = useState(0)
  // useEffect(() => { setNumTimesRendered(numTimesRendered++)}, numTimesRendered)

  const [events, setEvents] = useState([])
  console.log("Events", events)

  const [proposals, setProposals] = useState([])

  const [searchTerm, setSearchTerm] = useState('')
  const [searchBarValue, setSearchBarValue] = useState('')

  useEffect(() => {
    eventService.allEvents()
      .then(events => setEvents(events))
  }, [])

  useEffect(() => setProposals(proposalsMockData), [])

  const handleSearchBarChange = (event) => {
    setSearchBarValue(event.target.value)
  }

  const handleSearchBarSubmit = (event) => {
    event.preventDefault()
    setSearchTerm(searchBarValue)
  }

  const searchEvents = (searchTerm, events) => {
    console.log("Search term", searchTerm, "Events list", events)
    
    if (!searchTerm) {
      console.log("Escaping search")
      return events
    }

    const foundEvents = events.filter(event => event.name.includes(searchTerm || event.description.includes(searchTerm)))
    console.log("Found events", foundEvents)

    return foundEvents

    // const searcher = new FuzzySearch(events, ['name', 'description'], {
    //   caseSensitive: false,
    // });
    // return searcher.search(searchTerm || '');
  }

  return (
    
    <div>
      <h1>Local Events App</h1>
      <SearchBar
        value={searchBarValue}
        handleChange={handleSearchBarChange}
        handleSubmit={handleSearchBarSubmit} />

      <ProposalList events={events} />
      <VerticalBar/>
      <EventList events={events} />
      </div>
    
  );
}

export default App;
