import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import { ContextProvider } from './context'

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes />
      </Router>
    </ContextProvider>
  )
}

export default App
