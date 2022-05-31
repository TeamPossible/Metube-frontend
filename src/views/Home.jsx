import { useEffect, useState } from 'react';
import { getAllMedia } from '../utils/fetch-utils';
import { VideoDisplay } from '../components/VideoDisplay';
import { CommentsDisplay } from '../Components/CommentsDisplay';

const videoData = [
  {
    username: 'FakeUserData',
    avatar: './thanosPose.jpeg',
    comment: 'What an awesome video',
  },
];

export const Home = () => {
  const [media, setMedia] = useState([]);
  useEffect(() => {
    getAllMedia().then((files) => setMedia(files));
  }, []);

  console.log(media);

  return (
    <>
      <h1>A List Of Videos Should Be Displayed</h1>
      {media?.length > 0 ? (
        media.map((video, index) => {
          return (
            <div key={index}>
              <VideoDisplay video={video} index={index} />
              <CommentsDisplay comments={videoData} index={index} />
            </div>
          );
        })
      ) : (
        <h1>No Media To Display</h1>
      )}
    </>
  );
};
