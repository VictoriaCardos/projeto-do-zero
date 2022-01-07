import { Section, Title, ListOfFollowersContainer, Foll } from './styles'
import React from 'react'

const FollowContainer = props => {
  return (
    <Section>
      <Title>Seguidores de {props.name?.split(' ')[0]}</Title>
      <ListOfFollowersContainer>
        {(props?.followers).map(foll => (
          <Foll
            onClick={() => window.location.href(foll?.html_url)}
            key={foll?.id}
          >
            <h2>{foll?.login}</h2>
          </Foll>
        ))}
      </ListOfFollowersContainer>
    </Section>
  )
}

export default FollowContainer
