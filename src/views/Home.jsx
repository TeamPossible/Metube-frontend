import { VideoDisplay } from '../components/VideoDisplay';
import { useData } from '../hooks/useData';
import styles from './Home.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

export const Home = () => {
  const { videos } = useData();

  return (
    <div className={styles['home-container']}>
      {videos?.length > 0 ? (
        videos.map((video, index) => {
          return (
            <div key={index} className={styles['media-containers']}>
              <Link to={`/watch/${video.video_id}`}><VideoDisplay video={video} /></Link>
              
            </div>
          );
        })
      ) : (
        <h1>No Media To Display</h1>
      )}
    </div>
  );
};
