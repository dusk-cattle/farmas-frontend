// deps
import { useContext, useEffect, useState } from 'react';

// models
import { Comment } from '../../../../../../backend/controllers/Reporter/types';

// usecases
import { CreateComment, GetComments } from '../../../../../../backend';

// contexts
import { SessionContext } from '../../../../../../contexts';

// styles
import { Header, BackButton, BackIcon, Title } from '../../styles';
import {
  CommentInputArea,
  ConversationSection,
  CommentItem,
  CommentInput,
  Container,
  CommentContainer,
  SendIcon,
  AuthorName,
  CommentDateTime,
} from './styles';

// types
import { CommentsProps } from './types';

interface ExtendedComment extends Comment {
  isOwn?: boolean;
}

export function Comments(props: CommentsProps) {
  const { reportID, onClickBack } = props;

  const { data } = useContext(SessionContext);

  const [currentComment, setCurrentComment] = useState<string>();
  const [comments, setComments] = useState<ExtendedComment[]>([]);

  useEffect(() => {
    (async () => {
      await RefreshComments();
    })();
  }, []);

  async function RefreshComments() {
    const fetchedComments: ExtendedComment[] = await GetComments(reportID);

    const sanitizedComments = fetchedComments.map((fetchedComment) => {
      fetchedComment.isOwn = fetchedComment.id === data?.user.id;
      return fetchedComment;
    });

    const orderedComments = sanitizedComments.sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
    );

    setComments(orderedComments);
  }

  async function createComment() {
    if (!currentComment || currentComment === '') {
      return;
    }

    await CreateComment({ content: currentComment, reportId: reportID });

    setCurrentComment('');
    RefreshComments();
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={onClickBack}>
          <BackIcon />
        </BackButton>

        <Title>Comments</Title>
      </Header>

      <ConversationSection>
        {comments.map((comment, index) => (
          <CommentContainer key={index}>
            <CommentItem isOwn={comment.authorId === data?.user.id} key={index}>
              <AuthorName isOwn={comment.authorId === data?.user.id}>
                {comment.authorName}
              </AuthorName>

              <p>{comment.content}</p>

              <CommentDateTime>
                {comment.createdAt.toLocaleString()}
              </CommentDateTime>
            </CommentItem>
          </CommentContainer>
        ))}
      </ConversationSection>

      <CommentInputArea>
        <CommentInput
          cols={20}
          aria-multiline
          value={currentComment}
          placeholder="Digite uma mensagem..."
          onChange={(e) => setCurrentComment(e.target.value)}
        />

        <SendIcon onClick={createComment} />
      </CommentInputArea>
    </Container>
  );
}
