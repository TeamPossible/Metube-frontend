import { useEffect, useState } from 'react';
import { getAllMedia } from '../utils/fetch-utils';

export const Home = () => {
  const [media, setMedia] = useState([]);
  useEffect(() => {
    getAllMedia().then((files) => setMedia(files));
  }, []);

  return (
    <>
      <h1>A List Of Videos Should Be Displayed</h1>
      {media?.length > 0 ? (
        media.map((video, index) => {
          return <video key={index} src={video.video} controls width="200px" />;
        })
      ) : (
        <h1>No Media To Display</h1>
      )}
    </>
  );
};
