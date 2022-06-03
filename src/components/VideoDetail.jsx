import styles from './VideoDisplay.css';

export const VideoDetail = ({ video }) => {
  console.log('VIDEO DETAIL', video);
  return (
    <div className={styles['media-container']}>
      <video src={video.video_url} controls />
      <div className={styles['detail-stuff']}>
        <section className={styles['avatar-title-block']}>
          <img
            className={styles.avatar}
            src="../anubis.svg"
            width={'50px'}
          ></img>
          <p className={styles['detail-title']}>{video.title}</p>
        </section>
        <span>{video.username}</span>
        <p className={styles['video-description']}>{video.description}</p>
      </div>
    </div>
  );
};
