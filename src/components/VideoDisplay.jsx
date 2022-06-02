import styles from './VideoDisplay.css';
import { Link } from 'react-router-dom';

export const VideoDisplay = ({ video }) => {
  console.log('GETTING CLOSER', video);
  return (
    <div className={styles['post-container']}>
      <Link to={`/watch/${video.video_id}`}>
        <video src={video.video_url} controls width="200px" />
      </Link>
      <div>
        <section className={styles['avatar-title-block']}>
          <img src="./anubis.svg" className={styles.avatar}></img>
          <p className={styles['video-title']}>{video.title}</p>
        </section>

        <span>{video?.username}</span>
        <p>{video.description}</p>
      </div>
    </div>
  );
};
