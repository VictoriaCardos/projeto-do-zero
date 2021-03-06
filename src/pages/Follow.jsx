import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiChevronsLeft } from 'react-icons/fi'
import Button from '../components/button/Button'

import Container from '../components/container'
import FollowContainer from '../components/followContainer'

import { context } from '../context'

const Follow = () => {
  const ctx = useContext(context)
  const navigate = useNavigate()

  return (
    <Container>
      <FollowContainer name={ctx.userData?.name} followers={ctx.followers} />
      <Button onClick={() => navigate('/')}>
        <FiChevronsLeft size={25} />
      </Button>
    </Container>
  )
}

export default Follow
