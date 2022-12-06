// deps
import styled from 'styled-components';
import { ImWarning } from 'react-icons/im';

export const Container = styled.div`
  position: relative;
  margin-left: auto;
`;

export const Icon = styled(ImWarning)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;

  color: ${({ theme }) => theme.secondary};
`;

export const Tooltip = styled.div`
  width: calc(100vw - 4rem);
  top: 1rem;
  right: 1.25rem;
  z-index: 10;

  position: absolute;

  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.secondary};
  border-radius: 1rem 0 1rem 1rem;

  font-size: 1rem;
`;
