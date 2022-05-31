import { VideoDetail } from '../components/VideoDetail';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getById } from '../utils/fetch-utils';
import { CommentsDisplay } from '../Components/CommentsDisplay';

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
  const [media, setMedia] = useState(null);
  const location = useLocation();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getById(id).then((data) => setMedia(data));
  }, []);

  return (
    <>
      {media ? (
        <>
          <VideoDetail video={media} index={'1'} />
          <CommentsDisplay comments={videoData} index={'1'} />
        </>
      ) : (
        <h1>Just a moment while we fetch your video</h1>
      )}
    </>
  );
};
