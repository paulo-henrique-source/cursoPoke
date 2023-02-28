import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
  margin-right: 0.313rem;
  padding: 0.625rem;
  border-radius: 0.25rem;
  gap: 0.625rem;
`

export const Icon = styled(({ icon }) => icon)`
  justify-content: center;
  margin-left: 1.25rem;
  color: white;
`
export const Name = styled.h2`
  justify-content: center;
  margin-right: 1.25rem;
  color: white;
  font-size: 1.125rem;
`
