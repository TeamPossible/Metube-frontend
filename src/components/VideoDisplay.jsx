import styles from './VideoDisplay.css';
import { Link } from 'react-router-dom';

export const VideoDisplay = ({ video }) => {
  return (
    <div className={styles['post-container']}>
      <Link to={`/watch/${video.id}`}>
        <video src={video.video} controls width="200px" />
      </Link>
      <div>
        <section className={styles['avatar-title-block']}>
          <img src="./anubis.svg" className={styles.avatar}></img>
          <p className={styles['video-title']}>Video Title: Test Video</p>
        </section>

        <span>{video?.username}</span>
        <p>Video Description: This is a video posted from a test user</p>
      </div>
    </div>
  );
};
