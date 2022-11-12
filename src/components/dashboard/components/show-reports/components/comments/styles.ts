import styled from "styled-components";
import { TbSend } from "react-icons/tb";

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
`;

interface CommentItemProps {
  isOwn?: boolean;
}

export const CommentContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const AuthorName = styled.span<CommentItemProps>`
  align-self: ${(props) => (props.isOwn ? "flex-end" : "flex-start")};
  color: ${(props) => (props.isOwn ? "green" : "blue")};
`;

export const CommentDateTime = styled.span`
  align-self: flex-end;
`;

export const CommentItem = styled.div<CommentItemProps>`
  display: flex;
  flex-direction: column;
  min-width: 30%;
  max-width: 70%;
  padding: 1rem;

  border: 1px solid black;
  border-radius: 5px;

  margin-bottom: 10px;

  ${(props) => (props.isOwn ? "margin-left: auto;" : "")}
  ${(props) => (props.isOwn ? "background-color: #eee;" : "")}

  p {
    word-wrap: break-word;
  }
`;

export const CommentInputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  padding: 5px;
`;

export const CommentInput = styled.textarea`
  all: unset;
  resize: none;

  word-wrap: break-word;

  width: 80%;
  height: 75%;
  padding: 5px;

  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
`;

export const SendIcon = styled(TbSend)`
  width: 1.7rem;
  height: 1.7rem;
`;
