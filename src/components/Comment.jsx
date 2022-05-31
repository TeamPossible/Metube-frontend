export const Comment = ({ comment, index }) => {
  return (
    <div key={index}>
      <img src={comment.avatar}></img>
      <p>{comment.comment}</p>
      <span>{comment.username}</span>
    </div>
  );
};
