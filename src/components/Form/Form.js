import React, { useState } from 'react'
import './Form.css'

const Form = ({ submitSearch, clearSearch }) => {
  const [searchTerm, setSearch] = useState('')

  const handleChange = (e) => {
    let value = e.target.value
    setSearch(value)
  }

  const handleClick = (e) => {
    if (e.target.id === 'submit') {
      submitSearch(searchTerm)
    } else {
      clearSearch(searchTerm)
      setSearch('')
    }
  }

  return (
    <div class='search-form'>
      <input id='search'
        type={'search'}
        placeholder='Search'
        value={searchTerm}
        onChange={(event) => handleChange(event)}
      />
      <button id='submit' onClick={(event) => handleClick(event)}>Submit</button>
      <button id='clear' onClick={(event) => handleClick(event)}>Clear Search</button>
    </div>
  )
}

export default Form 