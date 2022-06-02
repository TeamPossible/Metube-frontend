import { VideoDisplay } from '../components/VideoDisplay';
import { CommentsDisplay } from '../Components/CommentsDisplay';
import { useData } from '../hooks/useData';
import styles from './Home.css';
import { useEffect } from 'react';

export const Home = () => {
  const { media } = useData();

  console.log('MEDIA', media);

  return (
    <div className={styles['home-container']}>
      {media.mediaState?.length > 0 ? (
        media.mediaState.map((video, index) => {
          return (
            <div key={index} className={styles['media-containers']}>
              <VideoDisplay video={video} />
            </div>
          );
        })
      ) : (
        <h1>No Media To Display</h1>
      )}
    </div>
  );
};
