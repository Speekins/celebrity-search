import React, { useState, useEffect }from 'react'

const CelebDetail = ({ celeb }) => {
let occupations = celeb.occupation.map((role, idx) => <h1 key={idx}>{role}</h1>)

  return (
    <div>
      <h1>{celeb.name}</h1>
      {occupations}
    </div>
  )
}

export default CelebDetail