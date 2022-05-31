import styles from './VideoDisplay.css';
import { Link } from 'react-router-dom';

export const VideoDisplay = (video, index) => {
  console.log(video);
  return (
    <div className={styles['post-container']}>
      <Link to={`/watch/${video.video.id}`}>
        <video key={index} src={video.video.video} controls width="200px" />
      </Link>
      <div>
        <img src="./anubis.svg" width={'50px'}></img>
        <span>Video Title: Test Video</span>
        <p>Video Description: This is a video posted from a test user</p>
      </div>
    </div>
  );
};
