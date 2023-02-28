import styled from 'styled-components'

export const ChangeCard = styled.div`
  display: flex;
  margin-top: 4rem;
  width: 100%;
  justify-content: space-around;

  button {
    position: relative;
    border: 0;
    outline: 0;
    width: 170px;
    background: none;
    font-size: 35px;
    line-height: 38px;
    margin-bottom: 2px;
    color: #ffffff;
    opacity: 0.4;
    text-transform: capitalize;
    cursor: pointer;

    img {
      position: absolute;
      top: -34px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      z-index: 1;
    }
    :hover {
      color: #ffffff;
      opacity: 1;
    }
  }
  .active {
    position: relative;
    border: 0;
    outline: 0;
    width: 170px;
    background: none;
    font-size: 35px;
    line-height: 38px;
    color: #ffffff;
    opacity: 1;
    text-transform: capitalize;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 3rem 3rem 0 0;
  padding: 2rem 10rem;

  p {
    font-size: 28px;
    line-height: 31px;
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.color.greyLight};
  }
`

export const Pokedex = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-around;
  gap: 50px;
  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: baseline;
      flex-direction: row;
    }
    h2 {
      display: flex;
      font-weight: light;
      color: #404040;
      white-space: nowrap;
      div {
      }
    }
    h3 {
      color: ${({ color }) => color};
      font-size: 28px;
      line-height: 31px;
      text-align: left;
      margin-bottom: 26px;
    }
  }
`

export const DescriptionInfo = styled.div`
  div {
    & + div {
      justify-content: left;
      p {
        color: ${({ theme }) => theme.color.greyLight};
        display: flex;
        font-size: 1.3rem;
        justify-content: flex-end;
      }
    }
  }
`
export const TypeWrapper = styled.div`
  width: 100%;
  gap: 0.5rem;
`
