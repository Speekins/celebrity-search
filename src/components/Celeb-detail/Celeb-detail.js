import React from 'react'

const CelebDetail = ({ celebDetail }) => {
  let occupations
  if (celebDetail.occupation) {
    occupations = celebDetail.occupation.map((role, idx) => <p key={idx}>{role}</p>)
  }

  return (
    <div>
      <h1>{celebDetail.name}</h1>
      {occupations && occupations}
      { celebDetail.birthday && <p>Birthday: {celebDetail.birthday}</p>}
      { celebDetail.height && <p>Height: {celebDetail.height}</p>}
      { celebDetail.death ? <p>Death: {celebDetail.death}<br></br>Age at Death: {celebDetail.age}</p> : <p>Age: {celebDetail.age}</p>}
    </div>
  )
}

export default CelebDetail