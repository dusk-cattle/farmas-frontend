// deps
import styled, { css } from 'styled-components';

// components
import { FiChevronDown } from 'react-icons/fi';

// types
import { ContainerProps, OptionProps, ArrowIconProps } from './types';

export const Container = styled.div<ContainerProps>`
  height: 3rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.border};
  border-radius: 1.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.75rem;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.background};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      box-shadow: 0px 3px 20px #707b810d;
    `}
`;

export const Label = styled.label`
  cursor: pointer;
  flex: 1;

  color: ${({ theme }) => theme.foreground};
  font-size: 0.75rem;
  line-height: 0.75rem;
  white-space: nowrap;

  ::after {
    content: ':';
  }
`;

export const Selected = styled.div`
  flex: 1;

  color: ${({ theme }) => theme.foreground};
  font-size: 0.75rem;
  font-weight: 500;
  text-align: right;
  background: none;
  border: none;
`;

export const ArrowIcon = styled(FiChevronDown)<ArrowIconProps>`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
  right: 1rem;

  transition: 0.2s;

  color: ${({ theme }) => theme.foreground};

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotateZ(-180deg);
    `}
`;

export const DropBox = styled.div`
  width: calc(100% - 2rem);
  max-height: 16rem;
  left: -1px;
  top: calc(3rem - 1px);
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 1.5rem;
  z-index: 50;

  overflow-y: scroll;
  position: absolute;
  display: flex;
  flex-direction: column;

  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-top: none;
  box-shadow: 0px 3px 20px #707b810d;
`;

export const Option = styled.button<OptionProps>`
  padding: 1rem;
  margin-top: 0.5rem;

  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: left;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1.25rem;
  font-size: 0.75rem;
  line-height: 0.75rem;
  color: ${({ theme }) => theme.foreground};

  :hover {
    background: ${({ theme }) => theme.border};
  }

  ${({ selected }) =>
    selected &&
    css`
      background: ${({ theme }) => theme.border};

      > .portfolio-selector__option__checkbox {
        background: ${({ theme }) => theme.foreground};
        border: none;
      }
    `}
`;

export const Checkbox = styled.div.attrs({
  className: 'portfolio-selector__option__checkbox',
})`
  width: 1rem;
  height: 1rem;

  border-radius: 50rem;
  border: 1px solid ${({ theme }) => theme.background};
`;
