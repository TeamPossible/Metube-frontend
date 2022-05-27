import { useState } from 'react';
import { uploadVideo } from '../utils/fetch-utils';
import { useAuth } from '../hooks/useAuth';

export const Upload = () => {
  const { user } = useAuth();
  const [media, setMedia] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    media.map(async (video) => {
      return await uploadVideo(user.id, video);
    });
    setMedia([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Upload</legend>
      <input
        type="file"
        multiple
        onChange={(e) => setMedia(Array.from(e.target.files))}
      ></input>
      <button>Upload Video</button>
    </form>
  );
};
