import { useState } from 'react';
import { uploadVideo } from '../utils/fetch-utils';
import { useAuth } from '../hooks/useAuth';
import { useData } from '../hooks/useData';
import { useLocation, useHistory } from 'react-router-dom';

export const Upload = () => {
  const location = useLocation();
  const history = useHistory();
  const { user } = useAuth();
  const { handleAdd } = useData();
  const [media, setMedia] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    media.map(async (video) => {
      const upload = await uploadVideo(user.id, title, description, video);
      console.log('UPLOAD RESPONSE', upload);
      await handleAdd(upload);
      history.push(`/watch/${upload.video_id}`);
      return upload;
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
