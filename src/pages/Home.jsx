import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>Home</h1>
      <Button onClick={() => navigate('/Sobre')}>Ir para SOBRE</Button>
      <Button onClick={() => navigate('/Cadastro')}>Ir para CADASTRO</Button>
    </>
  )
}

export default Home
