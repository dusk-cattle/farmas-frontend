// deps
import styled, { css } from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';
import { IoMdLeaf } from 'react-icons/io';

// components
import { Input as DefaultInput } from '../../components';

// assets
import { landsBanner, truckBanner } from './assets';

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
  height: 7rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;

  display: flex;
  align-items: end;

  background-image: url(${truckBanner});
  background-size: cover;
  border-radius: 0 0 1rem 1rem;
  background-position: center;
  font-size: 2rem;
  line-height: 2rem;
  color: white;
  font-family: 'Montserrat', sans-serif;
`;

export const LeafIcon = styled(IoMdLeaf)`
  width: 1.75rem;
  height: 1.75rem;
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

  ${({ disabled }) =>
    disabled &&
    css`
      color: #fff5;
    `}
`;

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
