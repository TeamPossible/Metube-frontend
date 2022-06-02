import { VideoDetail } from '../components/VideoDetail';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getById } from '../utils/fetch-utils';
import { CommentsDisplay } from '../Components/CommentsDisplay';
import { useAuth } from '../hooks/useAuth';

const videoData = [
  {
    username: 'FakeUserData',
    avatar: '../thanosPose.jpeg',
    comment: 'What an awesome video',
  },
  {
    username: 'FakeUserData1',
    avatar: '../thanosPose.jpeg',
    comment: 'Meh, its pretty ok',
  },
  {
    username: 'FakeUserData2',
    avatar: '../thanosPose.jpeg',
    comment: 'I think it was good too',
  },
];

export const Watch = () => {
  const { user } = useAuth();
  const [media, setMedia] = useState(null);
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

  return (
    <>
      {media ? (
        <>
          {user.id === media.user_id ? (
            <button onClick={editRedirect}>Edit Video</button>
          ) : null}
          <VideoDetail video={media} index={'1'} />
          <CommentsDisplay comments={videoData} index={'1'} />
        </>
      ) : (
        <h1>Just a moment while we fetch your video</h1>
      )}
    </>
  );
};
