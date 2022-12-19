import React, { useState, useEffect } from 'react'
import celebsData from '../../celebData'
import Celebs from '../Celebs/Celebs'

const App = () => {
  const [celebs, setCelebs] = useState([])

  const getCelebData = () => {
    setCelebs(celebsData)
  }

  useEffect(() => {
    getCelebData()
  }, [])

  console.log(celebs)
  return (
    <>
      <Celebs celebs={celebs}/>
    </>
  )
}

export default App