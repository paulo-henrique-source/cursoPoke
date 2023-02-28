import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ color }) => color};

  border-radius: 0.625rem;
  max-height: 100vh;
  justify-content: space-between;
`

export const CardContainer = styled.div`
  padding: 1.25rem;
  width: 33%;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Code = styled.h2`
  max-width: 1.25rem;
  color: ${({ theme }) => theme.color.blackMedium};
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 0.875rem;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
`

export const Name = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 3rem;
  line-height: 2rem;
  margin-bottom: 1.25rem;
  white-space: nowrap;
`

export const CardImage = styled.div`
  display: flex;
  justify-content: right;
  position: relative;
`

export const BadgesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Photo = styled.img`
  position: absolute;
  top: -25%;
  width: 15.5rem;
  padding: 0.2rem;
  background-repeat: no-repeat;
  background-size: 15.313rem 17.813rem;
  filter: grayscale(100%);
  transition: all ease 0.2s;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iNzUiIHZpZXdCb3g9IjAgMCA3NSA3NSIgZmlsbD0iI0ZGRkZGRjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTM3LjUgMEM1Ni43OTggMCA3Mi43MTY3IDE0LjM2MSA3NSAzMi45MDMySDU2LjY5NzRDNTQuNjEzNSAyNC4yOTggNDYuODA5MSAxNy45MDMyIDM3LjUgMTcuOTAzMkMyOC4xOTA5IDE3LjkwMzIgMjAuMzg2NSAyNC4yOTggMTguMzAyNiAzMi45MDMySDBDMi4yODMzMyAxNC4zNjEgMTguMjAyIDAgMzcuNSAwWiIgLz4NCjxwYXRoIGQ9Ik01Ni42OTc0IDQyLjA5NjhINzVDNzIuNzE2NyA2MC42MzkgNTYuNzk4IDc1IDM3LjUgNzVDMTguMjAyIDc1IDIuMjgzMzMgNjAuNjM5IDAgNDIuMDk2OEgxOC4zMDI2QzIwLjM4NjUgNTAuNzAyIDI4LjE5MDkgNTcuMDk2OCAzNy41IDU3LjA5NjhDNDYuODA5MSA1Ny4wOTY4IDU0LjYxMzUgNTAuNzAyIDU2LjY5NzQgNDIuMDk2OFoiIC8+DQo8cGF0aCBkPSJNMzcuNSA0OS44Mzg3QzQ0LjM2NTUgNDkuODM4NyA0OS45MzEyIDQ0LjMxNDUgNDkuOTMxMiAzNy41QzQ5LjkzMTIgMzAuNjg1NSA0NC4zNjU1IDI1LjE2MTMgMzcuNSAyNS4xNjEzQzMwLjYzNDUgMjUuMTYxMyAyNS4wNjg4IDMwLjY4NTUgMjUuMDY4OCAzNy41QzI1LjA2ODggNDQuMzE0NSAzMC42MzQ1IDQ5LjgzODcgMzcuNSA0OS44Mzg3WiIgLz4NCjwvc3ZnPg0K');
  &:hover {
    cursor: pointer;
    filter: grayscale(0);
    top: -30%;
    background-size: 15.313rem 19rem;
  }
`
