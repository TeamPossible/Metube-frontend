import { useState } from 'react';
import { uploadVideo } from '../utils/fetch-utils';
import { useAuth } from '../hooks/useAuth';

export const Upload = () => {
  const { user } = useAuth();
  console.log('USER', user);
  const [media, setMedia] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(media);
    const res = await uploadVideo(user.id, media);
    console.log('UPLOAD', res);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Upload</legend>
      <input type="file" onChange={(e) => setMedia(e.target.files[0])}></input>
      <button>Upload Video</button>
    </form>
  );
};
