import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import celebsData from '../../celebData'
import Celebs from '../Celebs/Celebs'
import CelebDetail from '../Celeb-detail/Celeb-detail'
import Form from '../Form/Form'
import fetchData from '../../apiCalls'

const App = () => {
  const [celebs, setCelebs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchedCelebs, setSearchedCelebs] = useState([])

  useEffect(() => {
    if (searchTerm) {
      fetchData(`https://api.api-ninjas.com/v1/celebrity?name=${searchTerm}`)
      .then(response => setSearchedCelebs(setID(response)))
      .then(() => setSearchTerm(''))
    } else {
      setCelebs(setID(celebsData))
    }
  }, [searchTerm])

  const exactMatch = (id) => {
    if (searchedCelebs.length) {
      return searchedCelebs.find(celeb => celeb.id === Number(id))
    }
    return celebs.find(celeb => celeb.id === Number(id))
  }

  const setID = (data) => {
    let value = 0
    data.forEach(element => {
      element.id = value
      value += 1
    })
    return data
  }

  const submitSearch = (name) => {
    setSearchTerm(name)
  }

  const clearSearch = () => {
    setSearchedCelebs([])
  }

  return (
    <Switch>
      <Route exact path='/'
        render={() => {
          if (searchedCelebs.length) {
            return (
              <>
                <Form submitSearch={submitSearch} clearSearch={clearSearch} />
                <Celebs celebs={searchedCelebs} />
              </>
            )
          }
          return (
            <>
              <Form submitSearch={submitSearch} clearSearch={clearSearch} />
              <Celebs celebs={celebs} />
            </>
          )
        }} />
      <Route path='/:id'
        render={({ match }) => {
          let celebDetail = exactMatch(match.params.id)
          return (
            <CelebDetail celebDetail={celebDetail} />
          )
        }} />
    </Switch>
  )
}

export default App