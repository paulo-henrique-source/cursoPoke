import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-height: 100vh;
  justify-content: center;
  gap: 3rem;
  margin-top: -7%;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Code = styled.h2`
  max-width: 1.25rem;
  color: #404040;
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
`

export const CardImage = styled.div`
  position: relative;
  /* z-index: 0; */
  display: flex;
  justify-content: right;
  position: relative;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIzNjAiCiAgaGVpZ2h0PSIzNjAiCiAgdmlld0JveD0iMCAwIDIwMCAyMDAiCiAgY29sb3I9IiNmZmYiCiAgZmlsbD0ibm9uZSIKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic3Bpbm5lci1zZWNvbmRIYWxmIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1vcGFjaXR5PSIwIiBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1vcGFjaXR5PSIwLjUiIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InNwaW5uZXItZmlyc3RIYWxmIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1vcGFjaXR5PSIwLjUiIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgoKICA8ZyBzdHJva2Utd2lkdGg9IjgiPgogICAgPHBhdGggc3Ryb2tlPSJ1cmwoI3NwaW5uZXItc2Vjb25kSGFsZikiIGQ9Ik0gNCAxMDAgQSA5NiA5NiAwIDAgMSAxOTYgMTAwIiAvPgogICAgPHBhdGggc3Ryb2tlPSJ1cmwoI3NwaW5uZXItZmlyc3RIYWxmKSIgZD0iTSAxOTYgMTAwIEEgOTYgOTYgMCAwIDEgNCAxMDAiIC8+CgogICAgPCEtLSAxZGVnIGV4dHJhIHBhdGggdG8gaGF2ZSB0aGUgcm91bmQgZW5kIGNhcCAtLT4KICAgIDxwYXRoCiAgICAgIHN0cm9rZT0iY3VycmVudENvbG9yIgogICAgICBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgIGQ9Ik0gNCAxMDAgQSA5NiA5NiAwIDAgMSA0IDk4IgogICAgLz4KICA8L2c+CgogIDxhbmltYXRlVHJhbnNmb3JtCiAgICBmcm9tPSIwIDAgMCIKICAgIHRvPSIzNjAgMCAwIgogICAgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIgogICAgdHlwZT0icm90YXRlIgogICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiCiAgICBkdXI9IjEzMDBtcyIKICAvPgo8L3N2Zz4=');
`

export const BadgesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Photo = styled.img`
  position: relative;
  width: 23rem;
  z-index: 1;
  background-repeat: no-repeat;
`
