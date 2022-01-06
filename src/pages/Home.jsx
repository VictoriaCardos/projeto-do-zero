import { React, useContext } from 'react'

import Container from '../components/container'
import Header from '../components/header'
import UserContainer from '../components/userContainer'
import UserDetails from '../components/UserDetails'
import UserNumbers from '../components/userNumbers'
import UserPicture from '../components/userPicture'

import { context } from '../context'

export default function Home() {
  //vou resgatar os dados disponiveis:
  const ctx = useContext(context)

  return (
    <Container>
      <Header />
      <UserContainer>
        {ctx.userData?.name ? (
          <>
            <UserPicture
              url={ctx.userData?.avatar_url}
              alternativeText={ctx.userData?.login}
            />
            <UserDetails
              name={ctx.userData?.name}
              login={ctx.userData?.login}
              bio={ctx.userData?.bio}
            />
            <UserNumbers
              repos={ctx.userData.public_repos}
              followers={ctx.userData.followers}
              following={ctx.userData.following}
            />
          </>
        ) : undefined}
      </UserContainer>
    </Container>
  )
}
