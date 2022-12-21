import React, { useState, useEffect } from 'react'

const Form = ({ submitSearch }) => {
  const [searchTerm, setSearch] = useState('')

  const handleChange = (e) => {
    let value = e.target.value
    setSearch(value)
  }

  const handleClick = () => {
    submitSearch(searchTerm)
    setSearch('')
  }

  return (
    <>
      <input id='search'
        type={'search'}
        placeholder='Search'
        value={searchTerm}
        onChange={(event) => handleChange(event)}
      />
      <button id='submit'onClick={() => handleClick()}>Submit</button>
    </>
  )
}

export default Form 