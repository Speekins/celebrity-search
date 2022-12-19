import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name, occupation, id }) => {
  let occupations = occupation.map((role, idx) => <p key={idx}>{role}</p>)

  return (

    <div>
      <h3>{name}</h3>
      {occupations}
      <Link to={`/${id}`}>
        <button>See Details</button>
      </Link>
    </div>

  )
}

export default Card