import { VideoDetail } from '../components/VideoDetail';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getById, getCommentsById } from '../utils/fetch-utils';
import { CommentsDisplay } from '../Components/CommentsDisplay';
import { useAuth } from '../hooks/useAuth';
// import { useData } from '../hooks/useData';

export const Watch = () => {
  const { user } = useAuth();
  // const { loading } = useData();
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

  useEffect(() => {
    getById(id)
      .then((data) => setMedia(data))
      .finally((media) => console.log('MEDIA DETAIL', media));
  }, []);

  useEffect(() => {
    try {
      getCommentsById(id)
        .then((data) => setComments(data))
        .finally((comments) => console.log('COMMENT DETAIL', comments));
    } catch (error) {
      throw new Error('No comments for this video');
    }
  }, []);
  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <>
      {media ? (
        <>
          {user.id === media.user_id ? (
            <button onClick={editRedirect}>Edit Video</button>
          ) : null}
          <VideoDetail video={media} index={'1'} />
          <CommentsDisplay comments={comments} index={'1'} />
        </>
      ) : (
        <h1>Just a moment while we fetch your video</h1>
      )}
    </>
  );
};
