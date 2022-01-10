import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCornerDownLeft } from 'react-icons/fi'
import Button from '../components/button/Button'

import Container from '../components/container'
import FollowingContainer from '../components/followingContainer'

import { context } from '../context'

const Following = () => {
  const ctx = useContext(context)
  const navigate = useNavigate()

  return (
    <Container>
      <Button onClick={() => navigate('/')}>
        <FiCornerDownLeft size={15} />
      </Button>
      <FollowingContainer name={ctx.userData?.name} following={ctx.following} />
    </Container>
  )
}

export default Following
