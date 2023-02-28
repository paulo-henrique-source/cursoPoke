import styled, { keyframes } from 'styled-components'

const codebeauty = keyframes`
0%{
  top: -500px;
}
50%{
  top: 0px;
}
75%{
  top: -30px;
}
100%{
  top: 0px;
}
`

const spin = keyframes`
0%{
  transform: rotateZ(0deg);
}
50%{
  transform: rotateZ(360deg);
}

100%{
  transform: rotateZ(0deg);
}
`

const buttonglow = keyframes`
0%{
  background: #7f8c8d;
}
50%{
  background: red;
}

100%{
  background: #7f8c8d;
}
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
`

export const MainBall = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: #fff;
  border: 25px solid #000;
  border-radius: 50%;
  overflow: hidden;
  animation: ${codebeauty} 0.25 ease-in-out, ${spin} 3s ease-in-out 3;

  &:before,
  &:after {
    content: '';
    position: absolute;
  }

  &:before {
    background: red;
    width: 100%;
    height: 50%;
  }

  &:after {
    top: calc(50% - 15px);
    width: 100%;
    height: 25px;
    background: #000;
  }
`
export const PokeButton = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  background: #7f8c8d;
  border: 20px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 20px #000;
  animation: ${buttonglow} 3s ease-in-out 3;
`
