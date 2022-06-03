import styles from './Comment.css';

export const Comment = ({ comment, index }) => {
  return (
    <div className={styles['comment-container']} key={index}>
      <img className={styles['avatar']} src={comment.avatar}></img>
      <span>{comment.username}</span>
      <p>{comment.comment}</p>
    </div>
  );
};
