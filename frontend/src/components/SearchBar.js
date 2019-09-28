import React from 'react'

const SearchBar = ({ value, handleChange, handleSubmit }) => {
    return <form id="searchbar">
        <input
            type="text"
            placeholder="Search.."
            value={value}
            onChange={handleChange}
        />
    </form>
}

export default SearchBar