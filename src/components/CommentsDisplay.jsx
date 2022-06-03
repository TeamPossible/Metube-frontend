import { useState } from 'react';
import { addComment } from '../utils/fetch-utils';
import { Comment } from './Comment';
import styles from './CommentDisplay.css';
import { useData } from '../hooks/useData';

export const CommentsDisplay = ({
  comments,
  user_id,
  video,
  username,
  fetch,
  avatar,
}) => {
  const { handleAddComment } = useData();
  const [newComment, setNewComment] = useState('');
  const [isNull, setIsNull] = useState(false);

  if (comments === null) {
    setIsNull(true);
  }

  const tryMap = () => {
    try {
      let commentsArray;
      comments &&
        (commentsArray = comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              comment={comment}
              index={index}
              avatar={avatar}
            />
          );
        }));
      return commentsArray;
    } catch (error) {
      return <p>No Comments</p>;
    }
  };

  let content;
  isNull ? (content = <p>No comments to display</p>) : (content = tryMap());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentUpload = await addComment(
      user_id,
      newComment,
      video.video_id,
      username,
      avatar
    );
    await fetch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
