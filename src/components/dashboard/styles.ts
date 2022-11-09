// deps
import styled, { css } from 'styled-components';

// components
import { AiOutlineFileAdd, AiOutlineUserAdd } from 'react-icons/ai';
import { TbLogout, TbFileAnalytics } from 'react-icons/tb';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  position: relative;

  background-color: ${({ theme }) => theme.background};
`;

export const Body = styled.div`
  overflow: auto;
  padding-bottom: 7rem;
`;

export const Map = styled.div`
  height: 18rem;
  margin-bottom: 1rem;

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

  position: absolute;
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

export const FileIcon = styled(AiOutlineFileAdd)`
  width: 4rem;
  height: 4rem;
  margin-top: -2rem;
  margin-right: auto;
  padding: 1rem;

  color: white;
  background: ${({ theme }) => theme.secondary};
  border-radius: 50rem;
`;

export const AddWorkerIcon = styled(AiOutlineUserAdd)`
  ${footerIconStyle}
`;

export const ReportsIcon = styled(TbFileAnalytics)`
  ${footerIconStyle}
`;

export const LogoutIcon = styled(TbLogout)`
  width: 2rem;
  height: 2rem;

  cursor: pointer;
  color: white;
`;
