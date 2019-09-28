import React, { useState, useEffect } from 'react'
import FuzzySearch from 'fuzzy-search'

import './App.css';

import eventService from './services/events'
import proposalService from './services/proposals'

import SearchBar from './components/SearchBar'
import RealEventList from './components/RealEventList'
import VerticalBar from './components/VerticalBar'
import RealProposalList from './components/RealProposalList'




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
  useEffect(() => {
    proposalService.allProposals()
      .then(proposals => setProposals(proposals))
  }, [])

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

      <RealEventList events={events} />
     <hr></hr>
      <RealProposalList proposals={proposals} />
      </div>
    
  );
}

export default App;
