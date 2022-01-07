import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Follow from './pages/Follow'
import Home from './pages/Home'
import Repos from './pages/Repos'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repos" element={<Repos />} />
      <Route path="/follow" element={<Follow />} />
    </Routes>
  )
}
