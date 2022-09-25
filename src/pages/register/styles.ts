// deps
import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';

// components
import { Input as DefaultInput } from '../../components';

// assets
import { landsBanner, truckBanner } from './assets';

// types
import { LabelProps } from './types';

export const Container = styled.form`
  height: 100vh;
  width: 100vw;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  background-image: url(${landsBanner});
  background-size: cover;
  background-color: white;
`;

export const Banner = styled.div`
  width: 100%;
  height: 10rem;
  margin-bottom: 1.5rem;

  background-image: url(${truckBanner});
  background-size: cover;
  border-radius: 0 0 1rem 1rem;
  background-position: center;
`;

const horizontalPadding = '1.5rem';

export const H1 = styled.h1`
  margin: 0 1.75rem;

  color: ${({ theme }) => theme.foreground};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

export const H2 = styled.h2`
  margin: 0 1.75rem;
  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme.foreground};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
`;

export const Input = styled(DefaultInput)`
  margin: 0 ${horizontalPadding};
  margin-top: 0.75rem;
`;

export const Button = styled.button`
  height: 3.5rem;
  margin: 0 ${horizontalPadding};
  margin-top: auto;

  background: ${({ theme }) => theme.primary};
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;

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

export const Span = styled.p`
  margin-bottom: 1.75rem;

  color: ${({ theme }) => theme.foreground};
  font-size: 0.75rem;
  line-height: 0.75rem;
  text-align: center;
`;

export const Link = styled(DefaultLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
`;
