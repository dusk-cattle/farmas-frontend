// deps
import styled, { keyframes } from 'styled-components';

// components
import { VscLoading } from 'react-icons/vsc';

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
