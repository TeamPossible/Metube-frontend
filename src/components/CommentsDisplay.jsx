import { Comment } from './Comment';

export const CommentsDisplay = ({ comments, index }) => {
  console.log(comments);
  return (
    <div key={index}>
      {comments.map((comment) => {
        return <Comment key={index} comment={comment} index={index} />;
      })}
    </div>
  );
};
