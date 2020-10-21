import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { MainPage } from './containers/MainPage'
import { Talks } from './containers/Talks'
import { Art } from './containers/Art'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/talks'>
            <Talks />
          </Route>
          <Route path='/art'>
            <Art />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  )
}

export default App
