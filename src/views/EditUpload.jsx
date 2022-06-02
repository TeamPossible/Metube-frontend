import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export const EditMedia = (id) => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    media.map(async (video) => {
      return await uploadVideo(user.id, video);
    });
    setMedia([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Edit Upload</legend>
      <label htmlFor="description">Video Description</label>
      <input
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <br></br>
      <label htmlFor="title">Video Title</label>
      <input
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br></br>
      <button>Upload Video</button>
    </form>
  );
};
