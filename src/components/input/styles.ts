// deps
import styled, { css, keyframes } from 'styled-components';
import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri';
import { MdInfoOutline } from 'react-icons/md';

// types
import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  height: 3rem;
  padding: 0 1rem;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ gap }) => gap}rem;

  border-radius: 1.125rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};

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

    ::placeholder {
      color: ${({ theme }) => theme.border};
    }
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.error};
    `}
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

export const InfoIcon = styled(MdInfoOutline)`
  min-width: 1rem;
  min-height: 1rem;

  color: ${({ theme }) => theme.foreground};
`;

const infoBalloonAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const InfoBalloon = styled.div`
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.75rem 1rem;
  z-index: 10;

  position: absolute;

  border-radius: 1rem;
  border-top-right-radius: 0;
  border: 1px solid ${({ theme }) => theme.border};
  background: #eee;
  color: ${({ theme }) => theme.foreground};

  animation-name: ${infoBalloonAnimation};
  animation-duration: 0.3s;
`;
