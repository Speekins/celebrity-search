import React from 'react'
import Card from '../Card/Card'
import './Celebs.css'

const Celebs = ({ celebs }) => {

  let allCelebs = celebs.map(celeb => {
    return <Card name={celeb.name}
      occupation={celeb.occupation}
      id={celeb.id}
      key={celeb.id} />
  })
  return (
    <div class='celebs-container'>
      {allCelebs}
    </div>
  )
}

export default Celebs