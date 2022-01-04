import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Cadastro from './pages/Cadastro'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/cadastro" element={<Cadastro />} />
      // o * significa que quando existir uma rota que não existe ele vai dizer
      que a página não foi encontrada
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
