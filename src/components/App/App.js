import React, { useState, useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import celebsData from '../../celebData'
import Celebs from '../Celebs/Celebs'
import CelebDetail from '../Celeb-detail/Celeb-detail'

const App = () => {
  const [celebs, setCelebs] = useState([])

  const getCelebData = () => {
    setCelebs(celebsData)
  }

  useEffect(() => {
    getCelebData()
  }, [])

  const exactMatch = (id) => {
    return celebs.find(celeb => celeb.id === Number(id))
  }

  return (
    <Switch>
      <Route exact path='/' render={() => <Celebs celebs={celebs} />} />
      <Route path='/:id'
        render={({ match }) => {
          let celeb = exactMatch(match.params.id)
          return (
            <CelebDetail celeb={celeb} />
          )
        }} />
    </Switch>
  )
}

export default App