// deps
import styled from 'styled-components';

// types
import { LabelProps } from './types';

const horizontalPadding = '1.5rem';

export const RadioGroup = styled.div`
  margin: 0 ${horizontalPadding};
  margin-top: 1rem;

  display: flex;
  gap: 1rem;
`;

export const Label = styled.label<LabelProps>`
  padding: 0.75rem;

  flex: 1;
  display: grid;
  align-items: center;
  justify-items: center;

  border: 1px solid
    ${({ theme, checked }) => (checked ? theme.secondary : theme.border)};
  background: ${({ theme, checked }) =>
    checked ? theme.secondary : theme.background};
  border-radius: 0.75rem;
  grid-template-columns: max-content auto;
`;

export const Radio = styled.input.attrs({
  type: 'radio',
})``;
