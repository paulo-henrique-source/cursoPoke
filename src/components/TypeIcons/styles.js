import styled from 'styled-components'

export const Container = styled.span`
  background-color: ${({ color }) => color};
  border-radius: 5px;
  div {
    width: 50%;
  }
  svg {
    transform: scale(0.5);
  }
`

export const Icon = styled(({ icon }) => icon)``
