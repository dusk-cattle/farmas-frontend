// deps
import styled, { css } from 'styled-components';
import { AiOutlineFileAdd, AiOutlineUserAdd } from 'react-icons/ai';
import { TbLogout, TbFileAnalytics } from 'react-icons/tb';
import { BiWifiOff } from 'react-icons/bi';

// types
import { IconProps } from './types';

export const Container = styled.div`
  height: inherit;
  width: 100vw;

  display: flex;
  flex-direction: column;
  position: relative;

  background-color: ${({ theme }) => theme.background};
`;

export const Body = styled.div`
  overflow: auto;
  margin-bottom: auto;
`;

export const Map = styled.div`
  height: 20rem;
  margin-bottom: 1rem;
  padding-top: 1.5rem;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.primary};
  border-radius: 0 0 2rem 2rem;
`;

export const Header = styled.header`
  width: -webkit-fill-available;
  padding: 1rem;
  z-index: 10;

  display: flex;
  align-items: center;
  position: fixed;
`;

export const Title = styled.h1`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  flex-direction: row-reverse;
  align-items: center;

  font-size: 1.25rem;
  color: ${({ theme }) => theme.background};
`;

export const FarmContainer = styled.div`
  height: auto;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  width: 100vw;
  padding: 1rem 1.5rem;
  left: 0;
  bottom: 0;
  z-index: 1;

  position: inherit;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  box-shadow: 0 2.5rem 3rem ${({ theme }) => theme.foreground};
`;

const footerIconStyle = css`
  width: 2rem;
  height: 2rem;

  color: ${({ theme }) => theme.foreground};
  opacity: 0.7;
`;

export const FileIcon = styled(AiOutlineFileAdd)<IconProps>`
  width: 4rem;
  height: 4rem;
  margin-top: -2rem;
  margin-right: auto;
  padding: 1rem;

  color: white;
  background: ${({ theme }) => theme.secondary};
  border-radius: 50rem;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #fffa;
      pointer-events: none;
    `}
`;

export const AddWorkerIcon = styled(AiOutlineUserAdd)`
  ${footerIconStyle}
`;

export const ReportsIcon = styled(TbFileAnalytics)<IconProps>`
  ${footerIconStyle}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
`;

export const LogoutIcon = styled(TbLogout)`
  width: 2rem;
  height: 2rem;

  cursor: pointer;
  color: white;
`;

export const OfflineIcon = styled(BiWifiOff)`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: auto;
  padding: 0.375rem;

  color: white;
  background: ${({ theme }) => theme.foreground + '66'};
  border-radius: 1.5rem;
`;
