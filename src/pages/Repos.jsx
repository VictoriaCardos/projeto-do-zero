import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiChevronsLeft } from 'react-icons/fi'
import Button from '../components/button/Button'

import Container from '../components/container'
import ReposContainer from '../components/reposContainer'

import { context } from '../context'

const Repos = () => {
  const ctx = useContext(context)
  const navigate = useNavigate()

  return (
    <Container>
      <ReposContainer name={ctx.userData?.name} repos={ctx.repos} />
      <Button onClick={() => navigate('/')}>
        <FiChevronsLeft size={25} />
      </Button>
    </Container>
  )
}

export default Repos
