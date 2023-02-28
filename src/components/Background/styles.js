import styled from 'styled-components'
import { ReactComponent as Pokeball } from '../../assets/images/pokeball.svg'

export const BackgroundImage = styled(Pokeball)`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;
  fill: ${({ theme }) => theme.color.whiteMedium};
`
