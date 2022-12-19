import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name, occupation, id }) => {
  console.log(occupation)
  let occupations = occupation.map((role, idx) => <p key={idx}>{role}</p>)

  return (
    <Link to={`/${id}`}>
      <div>
        <h3>{name}</h3>
        {occupations}
        <button>See Details</button>
      </div>
    </Link>
  )
}

export default Card