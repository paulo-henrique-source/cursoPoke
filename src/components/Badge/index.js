import React from 'react'
import { Container, Icon, Name } from './styles'
import { useTheme } from 'styled-components'
import BadgeIcons from '../../assets/types'

const Badges = ({ badgesList }) => {
  const theme = useTheme()

  if (!badgesList) {
    return <></>
  }

  return badgesList.map((badge, index) => (
    <Container color={theme.color.type[badge.type.name]} key={index}>
      <Icon icon={BadgeIcons[badge.type?.name]} />
      <Name>{badge.type?.name}</Name>
    </Container>
  ))
}

export default Badges
