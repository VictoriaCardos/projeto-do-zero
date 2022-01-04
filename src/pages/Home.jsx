import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate('/Sobre')}>Ir para SOBRE</button>
      <button onClick={() => navigate('/Cadastro')}>Ir para CADASTRO</button>
    </>
  )
}

export default Home
