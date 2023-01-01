import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ name, occupation, id }) => {
  let occupations
  if (occupation) {
    occupations = occupation.map((role, idx) => <p key={idx}>{role}</p>)
  }

  return (

    <div class='card'>
      <h3>{name}</h3>
      {occupations && occupations}
      <Link to={`/${id}`}>
        <button>See Details</button>
      </Link>
    </div>

  )
}

export default Card