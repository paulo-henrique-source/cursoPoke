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
import { useTheme } from 'styled-components'

import Badges from '../Badge/index.js'

const PokemonCard = ({ code, name, badges, image, color }) => {
  const theme = useTheme()

  return (
    <Container
      color={
        theme.color.backgroundType[color ? color[0].type.name : 'transparent']
      }
    >
      <CardContainer>
        <CardInfo>
          <Code>{code}</Code>
          <Name>{name}</Name>
          <BadgesContainer>
            <Badges badgesList={badges} />
          </BadgesContainer>
        </CardInfo>
      </CardContainer>
      <CardImage>
        <Photo src={image} />
      </CardImage>
    </Container>
  )
}

export default PokemonCard
