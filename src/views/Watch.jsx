import { VideoDetail } from '../components/VideoDetail';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getById, getCommentsById } from '../utils/fetch-utils';
import { CommentsDisplay } from '../components/CommentsDisplay';
import { useAuth } from '../hooks/useAuth';
import styles from '../App.css';

export const Watch = () => {
  const { user } = useAuth();
  console.log(user);
  const [media, setMedia] = useState(null);

  const [comments, setComments] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  const editRedirect = () => {
    history.push({
      pathname: `/upload/edit/${id}`,
      state: { from: location },
    });
  };
  const refetchComments = async () => {
    return getCommentsById(id).then((data) => setComments(data));
  };

  useEffect(() => {
    getById(id).then((data) => setMedia(data));
  }, []);

  useEffect(() => {
    try {
      refetchComments();
    } catch (error) {
      throw new Error('No comments for this video');
    }
  }, []);
  console.log(comments, 'COMMENTS BEFORE RENDER');
  return (
    <>
      {media ? (
        <>
          {user.id === media.user_id ? (
            <button onClick={editRedirect}>Edit Video</button>
          ) : null}
          <VideoDetail video={media} index={'1'} />
          <div className={styles['watch']}>
          <CommentsDisplay
            comments={comments}
            user_id={user.id}
            video={media}
            username={user.username}
            fetch={refetchComments}
          />
          </div>
        </>
      ) : (
        <h1>Just a moment while we fetch your video</h1>
      )}
    </>
  );
};
