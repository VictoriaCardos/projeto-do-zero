import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiChevronsLeft } from 'react-icons/fi'
import Button from '../components/button/Button'

import Container from '../components/container'
import FollowingContainer from '../components/followingContainer'

import { context } from '../context'

const Following = () => {
  const ctx = useContext(context)
  const navigate = useNavigate()

  return (
    <Container>
      <FollowingContainer name={ctx.userData?.name} following={ctx.following} />
      <Button onClick={() => navigate('/')}>
        <FiChevronsLeft size={25} />
      </Button>
    </Container>
  )
}

export default Following
