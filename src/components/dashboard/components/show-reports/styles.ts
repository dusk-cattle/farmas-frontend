// deps
import styled, { keyframes } from 'styled-components';

// components
import { VscLoading } from 'react-icons/vsc';
import { FaChevronLeft } from 'react-icons/fa';
import { GoFilePdf } from 'react-icons/go';
import { AiOutlineComment } from 'react-icons/ai';

// assets
import { emptyIllustration } from './assets';

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
  margin-right: auto;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.foreground};
`;

export const Body = styled.div`
  height: 100%;
  padding: 1rem;
`;

export const PDFContainer = styled.div`
  padding-top: 1rem;
  width: calc(100vw -2rem);
`;

export const ReportContainer = styled.div`
  margin-bottom: 0.5rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
`;

export const PDFIcon = styled(GoFilePdf)`
  width: 1.5rem;
  height: 1.5rem;

  color: ${({ theme }) => theme.error};
`;

export const CommentIcon = styled(AiOutlineComment)`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;

  color: ${({ theme }) => theme.foreground};
`;

export const EmptyContainer = styled.div`
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyIllustration = styled.img.attrs({
  src: emptyIllustration,
})`
  width: 10rem;
  height: 10rem;
`;

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

export const Loading = styled(VscLoading)`
  width: 4rem;
  height: 4rem;

  color: ${({ theme }) => theme.primary};
  animation-name: ${spin};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
