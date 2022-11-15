// deps
import styled from 'styled-components';

// components
import { FaChevronLeft } from 'react-icons/fa';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 1rem;
  padding-top: 2.5rem;

  display: flex;
  align-items: center;

  box-shadow: 0 1rem 2rem #0000000c;
`;

export const BackButton = styled.button`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
`;

export const BackIcon = styled(FaChevronLeft)`
  width: 1.5rem;
  height: 1.5rem;

  color: ${({ theme }) => theme.foreground};
`;

export const Title = styled.h1`
  font-size: 1.25rem;

  color: ${({ theme }) => theme.foreground};
`;

export const Form = styled.form`
  padding: 1.5rem;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 3.5rem;
  margin-top: auto;

  align-self: end;

  background-color: ${({ theme }) => theme.secondary};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
`;
