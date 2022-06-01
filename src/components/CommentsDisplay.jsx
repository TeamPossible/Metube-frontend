import { Comment } from './Comment';
import { useState } from 'react';
import styles from './CommentDisplay.css';

export const CommentsDisplay = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  return (
    <div>
      <form>
        <input
          className={styles['comment-input']}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add comment"
        ></input>
        <button>Add comment</button>
      </form>
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} index={index} />;
      })}
    </div>
  );
};
