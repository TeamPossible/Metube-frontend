import styles from './VideoDisplay.css';

export const VideoDetail = (video, index) => {
  console.log(video);
  return (
    <div className={styles['media-container']}>
      <video key={index} src={video.video.video} controls />
      <div>
        <img src="../anubis.svg" width={'50px'}></img>
        <span>Video Title: Test Video</span>
        <p>Video Description: This is a video posted from a test user</p>
      </div>
    </div>
  );
};
