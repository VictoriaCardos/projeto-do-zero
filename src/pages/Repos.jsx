import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCornerDownLeft } from 'react-icons/fi'
import Button from '../components/button/Button'

import Container from '../components/container'
import ReposContainer from '../components/reposContainer'

import { context } from '../context'

const Repos = () => {
  const ctx = useContext(context)
  const navigate = useNavigate()

  return (
    <Container>
      <Button onClick={() => navigate('/')}>
        <FiCornerDownLeft size={15} />
      </Button>
      <ReposContainer name={ctx.userData?.name} repos={ctx.repos} />
    </Container>
  )
}

export default Repos
