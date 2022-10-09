// deps
import styled, { keyframes } from 'styled-components';

import { VscLoading } from 'react-icons/vsc';

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`;

export const Loading = styled(VscLoading)`
  width: 4rem;
  height: 4rem;

  color: ${({ theme }) => theme.primary};
  animation-name: ${spin};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
