import React, { useState } from 'react'
import FuzzySearch from 'fuzzy-search'

import './App.css';

import eventService from './services/events'

import SearchBar from './components/SearchBar'
import FutureEvents from './components/FutureEvents'
import VerticalBar from './components/VerticalBar'
import CurrentEvents from './components/CurrentEvents'

const currentEventsMockData = [

]

const FutureEventsMockData = [

]

function App() {
  const [currentEvents, setCurrentEvents] = useState(currentEventsMockData)
  const [futureEvents, setFutureEvents] = useState(FutureEventsMockData)

  const [searchTerm, setSearchTerm] = useState('')
  const [searchBarValue, setSearchBarValue] = useState('')



  const handleSearchBarChange = (event) => {
    setSearchBarValue(event.target.value)
  }

  const handleSearchBarSubmit = (event) => {
    event.preventDefault()
    setSearchTerm(searchBarValue)
  }

  const searchEvents = (searchTerm, events) => {
    const searcher = new FuzzySearch(events, ['name', 'description'], {
      caseSensitive: false,
    });
    return searcher.search(searchTerm);
  }

  return (
    <>
      <SearchBar
        value={searchBarValue}
        handleChange={handleSearchBarChange}
        handleSubmit={handleSearchBarSubmit} />

      <FutureEvents events={searchEvents(FutureEvents)} />
      <VerticalBar />
      <CurrentEvents events={searchEvents(currentEvents)} />
    </>
  );
}

export default App;
