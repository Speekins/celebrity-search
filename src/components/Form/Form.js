import React, { useState } from 'react'

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
    <>
      <input id='search'
        type={'search'}
        placeholder='Search'
        value={searchTerm}
        onChange={(event) => handleChange(event)}
      />
      <button id='submit' onClick={(event) => handleClick(event)}>Submit</button>
      <button id='clear' onClick={(event) => handleClick(event)}>Clear Search</button>
    </>
  )
}

export default Form 