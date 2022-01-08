import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button/Button'

import Container from '../components/container'
import FollowingContainer from '../components/followingContainer'

import { context } from '../context'

const Following = () => {
  const ctx = useContext(context)
  const navigate = useNavigate()

  return (
    <Container>
      <Button onClick={() => navigate('/')}>VOLTAR</Button>
      <FollowingContainer name={ctx.userData?.name} following={ctx.following} />
    </Container>
  )
}

export default Following
