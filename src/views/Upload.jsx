import { useState } from 'react';
import { uploadVideo } from '../utils/fetch-utils';
import { useAuth } from '../hooks/useAuth';

export const Upload = () => {
  const { user } = useAuth();
  const [media, setMedia] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    media.map(async (video) => {
      return await uploadVideo(user.id, title, description, video);
    });
    setMedia([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Upload</legend>
      <label htmlFor="media">Select Video</label>
      <input
        type="file"
        name="media"
        multiple
        onChange={(e) => setMedia(Array.from(e.target.files))}
      ></input>
      <br></br>
      <label htmlFor="title">Video Title</label>
      <input
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br></br>
      <label htmlFor="description">Video Description</label>
      <input
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <br></br>
      <button>Upload Video</button>
    </form>
  );
};
