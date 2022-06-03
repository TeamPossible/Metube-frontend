import { useState } from 'react';
import { uploadVideo } from '../utils/fetch-utils';
import { useAuth } from '../hooks/useAuth';
import { useData } from '../hooks/useData';
import { useHistory, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

export const Upload = () => {
  const history = useHistory();
  const { user } = useAuth();
  const { handleAdd } = useData();
  const [media, setMedia] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    console.log('MEDIA UPLOAD CHECK', media[0]);
    const upload = await uploadVideo(user.id, title, description, media[0]);
    handleAdd(upload);
    setMedia({});
    history.push(`/watch/${upload.video_id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Upload</legend>
      <label htmlFor="media">Select Video</label>
      <input
        type="file"
        name="media"
        onChange={(e) => setMedia(e.target.files)}
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
