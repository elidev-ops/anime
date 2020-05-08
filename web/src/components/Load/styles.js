import styled, { keyframes } from 'styled-components';

const Rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

export const Container = styled.div`
  grid-column: 1 / 5;
  width: 100%;
  height: 100%;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: relative;
    margin: 0 auto;
    width: 50px;

    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }

    svg {
      animation: ${Rotate} 2s linear infinite;
      height: 100%;
      transform-origin: center center;
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;

      circle {
        stroke: #cc0034;
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: ${Dash} 1.5s ease-in-out infinite;
        stroke-linecap: round;
      }
    }
  }
`;
