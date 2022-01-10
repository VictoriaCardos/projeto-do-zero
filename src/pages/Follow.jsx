import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCornerDownLeft } from 'react-icons/fi'
import Button from '../components/button/Button'

import Container from '../components/container'
import FollowContainer from '../components/followContainer'

import { context } from '../context'

const Follow = () => {
  const ctx = useContext(context)
  const navigate = useNavigate()

  return (
    <Container>
      <Button onClick={() => navigate('/')}>
        <FiCornerDownLeft size={15} />
      </Button>
      <FollowContainer name={ctx.userData?.name} followers={ctx.followers} />
    </Container>
  )
}

export default Follow
