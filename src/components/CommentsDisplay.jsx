import { useState } from 'react';
import { Comment } from './Comment';
import styles from './CommentDisplay.css';
// import { useData } from '../hooks/useData';

export const CommentsDisplay = ({ comments }) => {
  // const { loading } = useData();
  const [newComment, setNewComment] = useState('');
  const [isNull, setIsNull] = useState(true);

  if (comments !== null) {
    setIsNull(false);
  }

  const tryMap = () => {
    try {
      let commentsArray;
      comments &&
        (commentsArray = comments.map((comment, index) => {
          return <Comment key={index} comment={comment} index={index} />;
        }));
      return commentsArray;
    } catch (error) {
      return <p>No Comments</p>;
    }
  };

  let content;
  isNull ? (content = <p>No comments to display</p>) : (content = tryMap());

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // if (loading) {
  //   return <p>loading...</p>;
  // }
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
      {content}
    </div>
  );
};
