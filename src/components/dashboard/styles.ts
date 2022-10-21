// deps
import styled from 'styled-components';

// components
import { AiOutlineFileAdd } from 'react-icons/ai';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.background};
`;

export const Body = styled.div`
  overflow: scroll;
`;

export const Map = styled.div`
  height: 18rem;

  background-color: ${({ theme }) => theme.primary};
  border-radius: 0 0 2rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 1rem;

  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  top: 1rem;
  position: fixed;

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

export const EmptyTitle = styled.p`
  margin: 0;

  font-size: 1.25rem;
  color: white;
`;

export const EmptyDescription = styled.p`
  margin: 0;
  margin-top: 0.5rem;

  text-align: center;
  font-size: 0.75rem;
  color: white;
`;

export const CreateAnalysisButton = styled.button`
  width: 4rem;
  height: 4rem;
  margin: 2rem;
  margin-top: auto;
  border-radius: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.secondary};
`;

export const FileIcon = styled(AiOutlineFileAdd)`
  width: 2rem;
  height: 2rem;

  color: white;
`;
