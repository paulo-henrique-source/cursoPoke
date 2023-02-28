import React from 'react'
import { Container, Icon } from './styles'
import { useTheme } from 'styled-components'
import BadgeIcons from '../../assets/types'

const TypeIcons = ({ badgesList }) => {
  const theme = useTheme()

  if (!badgesList) {
    return <></>
  }

  console.log(badgesList)

  return badgesList.map((badge, index) => (
    <Container color={theme.color.type[badge.name]} key={index}>
      <div>
        <Icon icon={BadgeIcons[badge?.name]} />
      </div>
    </Container>
  ))
}

export default TypeIcons
