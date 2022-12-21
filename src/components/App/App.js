import React, { useState, useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import celebsData from '../../celebData'
import Celebs from '../Celebs/Celebs'
import CelebDetail from '../Celeb-detail/Celeb-detail'
import Form from '../Form/Form'
import fetchData from '../../apiCalls'

const App = () => {
  const [celebs, setCelebs] = useState([])

  const getCelebData = (data) => {
    setCelebs(data)
  }

  useEffect(() => {
    if (!celebs.length) {
      getCelebData(celebsData)
    } else {
      getCelebData(celebs)
    }
  }, [])

  const exactMatch = (id) => {
    return celebs.find(celeb => celeb.id === Number(id))
  }

  const setID = () => {
    
  }

  const submitSearch = (name) => {
    fetchData(`https://api.api-ninjas.com/v1/celebrity?name=${name}`)
      .then(data => setCelebs(data))
      .then(() => console.log(celebs))
  }

  return (
    <Switch>
      <Route exact path='/'
        render={() => {
          return (
            <>
              <Form submitSearch={submitSearch} />
              <Celebs celebs={celebs} />
            </>
          )
        }} />
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