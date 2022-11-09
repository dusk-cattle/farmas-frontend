// deps
import styled from 'styled-components';

// assets
import { emptyIllustration } from './assets';

export const EmptyContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  font-size: 0.825rem;
  color: ${({ theme }) => theme.foreground};
`;

export const EmptyIllustration = styled.img.attrs({
  src: emptyIllustration,
})`
  width: 10rem;
  height: 10rem;
  margin-left: -0.5rem;
`;
