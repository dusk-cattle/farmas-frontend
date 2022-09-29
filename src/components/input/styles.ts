// deps
import styled from 'styled-components';
import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri';

export const Container = styled.div`
  height: 3rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  border-radius: 1.125rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background};

  input {
    width: 100%;
    height: 100%;

    border: none;
    background: none;
    outline: none;
    text-align: right;
    color: ${({ theme }) => theme.foreground};
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
`;

export const Label = styled.label`
  width: max-content;

  color: ${({ theme }) => theme.foreground};
  font-size: 0.75rem;
  line-height: 0.75rem;
  white-space: nowrap;

  ::after {
    content: ':';
  }
`;

export const OpenedEyeIcon = styled(RiEyeLine)`
  min-width: 1rem;
  min-height: 1rem;

  color: ${({ theme }) => theme.foreground};
`;

export const ClosedEyeIcon = styled(RiEyeCloseLine)`
  min-width: 1rem;
  min-height: 1rem;

  color: ${({ theme }) => theme.foreground};
`;
