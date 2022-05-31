import { Comment } from './Comment';

export const CommentsDisplay = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} index={index} />;
      })}
    </div>
  );
};
