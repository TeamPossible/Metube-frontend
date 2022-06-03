import { VideoDetail } from '../components/VideoDetail';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getById, getCommentsById } from '../utils/fetch-utils';
import { CommentsDisplay } from '../components/CommentsDisplay';
import { useAuth } from '../hooks/useAuth';

export const Watch = () => {
  const { user } = useAuth();
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
  return (
    <>
      {media ? (
        <>
          <VideoDetail video={media} index={'1'} />
          <CommentsDisplay
            comments={comments}
            user_id={user.id}
            video={media}
            username={user.username}
            fetch={refetchComments}
            avatar={user.avatar}
          />
        </>
      ) : (
        <h1>Just a moment while we fetch your video</h1>
      )}
    </>
  );
};
