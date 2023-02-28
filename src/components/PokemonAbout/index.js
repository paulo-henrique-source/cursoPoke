import React from 'react'
import {
  Container,
  CardContainer,
  BadgesContainer,
  CardInfo,
  Code,
  Name,
  CardImage,
  Photo,
} from './styles.js'

import Badges from '../Badge/index.js'

const PokemonAbout = ({ code, name, badges, image }) => {
  return (
    <Container>
      <CardImage>
        <Photo src={image} />
      </CardImage>
      <CardContainer>
        <CardInfo>
          <Code>{code}</Code>
          <Name>{name}</Name>
          <BadgesContainer>
            <Badges badgesList={badges} />
          </BadgesContainer>
        </CardInfo>
      </CardContainer>
    </Container>
  )
}

export default PokemonAbout
