// deps
import styled from 'styled-components';
import { RiPlantFill } from 'react-icons/ri';
import { FaLock } from 'react-icons/fa';

// components
import { Loading as DefaultLoading } from '../../../../../components';

// assets
import { selectFarmBanner } from '../../assets';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  padding: 2rem;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${selectFarmBanner});
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.background};
`;

export const Option = styled.div`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  padding: 1rem;
  border-radius: 1rem;
`;

export const PlantIcon = styled(RiPlantFill)`
  width: 1rem;
  height: 1rem;

  color: ${({ theme }) => theme.foreground};
`;

export const Loading = styled(DefaultLoading)`
  color: ${({ theme }) => theme.background};
`;

export const NewFarmButton = styled.button`
  bottom: 2rem;
  right: 2rem;
  padding: 0.75rem 1rem;

  pointer-events: none;
  cursor: default;

  position: absolute;
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 1.25rem;
  border-radius: 0.75rem;
  color: ${({ theme }) => theme.foreground + '55'};
  background: ${({ theme }) => theme.background};
`;

export const LockIcon = styled(FaLock)`
  width: 1.25rem;
  height: 1.25rem;

  color: ${({ theme }) => theme.foreground + '55'};
`;
