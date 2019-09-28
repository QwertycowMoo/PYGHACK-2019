import React, { useState, useEffect } from 'react'
import FuzzySearch from 'fuzzy-search'

import './App.css';

import eventService from './services/events'
import proposalService from './services/proposals'

import SearchBar from './components/SearchBar'
import RealEventList from './components/RealEventList'
import RealProposalList from './components/RealProposalList'


function App() {

  const [events, setEvents] = useState([])

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

  const handleSearchBarChange = event => {
    setSearchBarValue(event.target.value)
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleSearchBarSubmit = event => {
    event.preventDefault()
  }

  const searchEvents = (searchTerm, events) => {
    console.log("Search term", searchTerm, "Events list", events)

    if (!searchTerm) {
      console.log("Escaping search")
      return events
    }

    const foundEvents = events.filter(event =>
      event.name.toLowerCase().includes(searchTerm
        || event.description.toLowerCase().includes(searchTerm)))
    console.log("Found events", foundEvents)

    return foundEvents

    // const searcher = new FuzzySearch(events, ['name', 'description'], {
    //   caseSensitive: false,
    // });
    // return searcher.search(searchTerm || '');
  }

  return (
    <div>
      <h1 className="header">Local Events App</h1>
      <SearchBar
        value={searchBarValue}
        handleChange={handleSearchBarChange}
        handleSubmit={handleSearchBarSubmit} />

      <RealProposalList proposals={searchEvents(searchTerm, proposals)} />
      <hr></hr>
      <RealEventList events={searchEvents(searchTerm, events)} />
    </div>
  )
}

export default App;
