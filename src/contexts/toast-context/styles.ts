// deps
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  5% {
    transform: translateY(0%);
  }
  95% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const Container = styled.div`
  top: 0;
  left: 0;
  width: calc(100% - 4rem);
  padding: 2rem;

  position: absolute;

  color: white;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.error};
  box-shadow: 0 1rem 4rem #0009;
  animation-name: ${animation};
  animation-duration: 3050ms;
  animation-timing-function: ease;
`;
