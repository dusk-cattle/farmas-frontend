// deps
import styled, { css } from 'styled-components';
import { RiSendPlaneLine } from 'react-icons/ri';

// assets
import { backgroundBanner } from './assets';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.8fr 9fr 0.7fr;

  width: 100%;
  height: 100%;
`;

export const ConversationSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 1rem;

  overflow-y: scroll;

  background-color: #e3e3e3;
  background-image: url(${backgroundBanner});
  background-size: cover;
  background-position: center;
`;

interface CommentItemProps {
  isOwn?: boolean;
}

export const CommentContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const AuthorName = styled.span<CommentItemProps>`
  font-size: 1rem;
  font-weight: 700;

  ${({ isOwn, theme }) =>
    isOwn
      ? css`
          align-self: flex-end;
          color: ${({ theme }) => theme.primary};
        `
      : css`
          align-self: flex-start;
          color: ${({ theme }) => theme.background};
        `}
`;

export const CommentDateTime = styled.span`
  align-self: flex-end;
  font-size: 0.625rem;
  opacity: 0.4;
`;

export const CommentItem = styled.div<CommentItemProps>`
  display: flex;
  flex-direction: column;
  min-width: 30%;
  max-width: 70%;
  padding: 0.75rem 1rem;

  border-radius: 0.75rem;

  margin-bottom: 10px;
  box-shadow: 0px 0px 1rem #0006;
  backdrop-filter: blur(3px);

  ${({ isOwn, theme }) =>
    isOwn
      ? css`
          border-top-right-radius: 0;
          margin-left: auto;
          background: ${theme.background + 'dd'};
        `
      : css`
          border-top-left-radius: 0;
          background: ${theme.background + '66'};
        `}

  p {
    word-wrap: break-word;
  }
`;

export const CommentInputArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  padding: 0.75rem;
`;

export const CommentInput = styled.textarea`
  all: unset;
  resize: none;

  word-wrap: break-word;

  width: 100%;
  height: 2rem;
  padding: 0.5rem 1rem;

  font-size: 0.875rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
`;

export const SendIcon = styled(RiSendPlaneLine)`
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  margin: -0.5rem 0;
  padding: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;

  border-radius: 50rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
`;
