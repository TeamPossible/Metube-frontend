export const VideoDisplay = (video, index) => {
  return (
    <>
      <video key={index} src={video.video} controls width="200px" />
    </>
  );
};
