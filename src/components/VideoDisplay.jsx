export const VideoDisplay = (video, index) => {
  return (
    <>
      <video key={index} src={video.video} controls width="200px" />
      <img src="./anubis.svg" width={'50px'}></img>
      <p>Video Title</p>
      <p>Video Description</p>
    </>
  );
};
