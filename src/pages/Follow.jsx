import React, { useContext } from 'react'

import Container from '../components/container'
import FollowContainer from '../components/followContainer'

import { context } from '../context'

const Follow = () => {
  const ctx = useContext(context)

  return (
    <Container>
      <FollowContainer name={ctx.userData?.name} followers={ctx.followers} />
    </Container>
  )
}

export default Follow
