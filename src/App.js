import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Art } from './containers/Art'
import { Talks } from './containers/Talks'
import { Header } from './components/Header'
import { Skills } from './containers/Skills'
import { Footer } from './components/Footer'
import { MainPage } from './containers/MainPage'
import { Volunteering } from './containers/Volunteering'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='desktopContainer'>
        <Header />
        <div className='mainContent'>
          <Switch>
            <Route exact path='/'>
              <MainPage />
            </Route>
            <Route path='/talks'>
              <Talks />
            </Route>
            <Route path='/skills'>
              <Skills />
            </Route>
            <Route path='/art'>
              <Art />
            </Route>
            <Route path='/volunteering'>
              <Volunteering />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
