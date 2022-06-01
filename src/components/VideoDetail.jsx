import styles from './VideoDisplay.css';

export const VideoDetail = ({ video }) => {
  return (
    <div className={styles['media-container']}>
      <video src={video.video} controls />
      <div>
        <section className={styles['avatar-title-block']}>
          <img
            className={styles.avatar}
            src="../anubis.svg"
            width={'50px'}
          ></img>
          <p className={styles['detail-title']}>Video Title: Test Video</p>
        </section>
        <span>{video.username}</span>
        <p className={styles['video-description']}>
          Video Description: This is a video posted from a test user
        </p>
      </div>
    </div>
  );
};
