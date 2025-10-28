import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import type { CommentItemType } from "../constants/comment";

// 댓글 배열에 대한 타입
interface CommentProps {
  comments: CommentItemType[];
}

const Comment = ({ comments }: CommentProps) => {
  const navigate = useNavigate();
  const handleClickComment = (id: CommentItemType["id"]) => {
    navigate(`/comment/${id}`);
  };

  return (
    <>
      {comments.map((comment: CommentItemType) => (
        <CommentContainer
          key={comment.id}
          onClick={() => handleClickComment(comment.id)}
        >
          <MetaInfo>
            <Author>{comment.author}</Author>
            <Time>{comment.timestamp}</Time>
          </MetaInfo>
          <CommentTxt>{comment.comment}</CommentTxt>
        </CommentContainer>
      ))}
    </>
  );
};

export default Comment;

const CommentContainer = styled.div`
  min-width: 100%;
  min-height: 6.25rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
  border-radius: 1.25rem;
  background-color: white;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: var(--text-black);
  &:hover {
    cursor: pointer;
    color: var(--main-orange);
    box-shadow: 0 0 0.625rem rgba(238, 110, 67, 0.727);
    background-color: #fef5f0;
    > span {
      color: #ffcca8;
    }
  }
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`;

const Author = styled.div`
  font-size: 1.5625rem;
  font-weight: 700;
`;
const Time = styled.span`
  font-size: 0.9375rem;
  color: var(--text-grey);
  font-weight: 600;
`;
const CommentTxt = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  overflow: hidden; /* 박스에서 넘쳐난 텍스트 숨기기 */
  white-space: nowrap; /* 줄바꿈이 없어짐 */
  text-overflow: ellipsis; /* 말줄임 효과 (...) */
  word-break: break-all; /* 어절이 유지되지 않고 끊어져서 줄바꿈 됨 */
`;
