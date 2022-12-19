import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'

const Celebs = ({ celebs }) => {

  let allCelebs = celebs.map(celeb => {
    return <Card name={celeb.name}
      occupation={celeb.occupation}
      id={celeb.id}
      key={celeb.id} />
  })
  return (
    <>
      <h1>This is where celeb cards will go</h1>
      {allCelebs}
    </>
  )
}

export default Celebs