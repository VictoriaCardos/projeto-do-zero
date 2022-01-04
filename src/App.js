import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'

import Routes from './routes'

function App() {
  return (
    <Router>
      <Header>Pizza Place</Header>
      <Routes />
    </Router>
  )
}

export default App
