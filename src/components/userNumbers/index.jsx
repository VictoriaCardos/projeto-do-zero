import React from 'react'
import { Container, NumberContainer } from './styles'
import { Link } from 'react-router-dom'

const UserNumbers = props => {
  return (
    <Container>
      <Link to="/repos">
        <NumberContainer>
          <h1>{props.repos}</h1>
          <h2>Repositórios</h2>
        </NumberContainer>
      </Link>
      <Link to="/follow">
        <NumberContainer>
          <h1>{props.followers}</h1>
          <h2>Seguidores</h2>
        </NumberContainer>
      </Link>

      <Link to="following">
        <NumberContainer>
          <h1>{props.following}</h1>
          <h2>Seguindo</h2>
        </NumberContainer>
      </Link>
    </Container>
  )
}

export default UserNumbers
