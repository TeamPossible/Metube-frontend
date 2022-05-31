import styles from './VideoDisplay.css';

export const VideoDetail = ({ video }) => {
  return (
    <div className={styles['media-container']}>
      <video src={video.video} controls />
      <div>
        <img src="../anubis.svg" width={'50px'}></img>
        <span>{video.username}</span>
        <span>Video Title: Test Video</span>
        <p className={styles['video-description']}>
          Video Description: This is a video posted from a test user
        </p>
      </div>
    </div>
  );
};
