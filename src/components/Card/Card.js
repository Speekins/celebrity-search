import React from 'react'

const Card = ({ name, occupation }) => {
console.log(occupation)
  let occupations = occupation.map((role, idx) => <p key={idx}>{role}</p>)

  return (
    <div>
      <h3>{name}</h3>
      {occupations}
    </div>
  )
}

export default Card