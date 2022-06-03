import { useState } from 'react';
import styles from './EditProfile.css';
import { updateProfile } from '../utils/fetch-utils';
import { useAuth } from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';

export const EditProfile = () => {
  const { user, setUser } = useAuth();
  const history = useHistory();

  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [avatar, setAvatar] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateProfile(user, bio, avatar, dob);
    response && setUser(response);
    response && history.push(`/profile/${user.id}`);
  };

  return (
    <div>
      <h1>You can set Profile info here</h1>
      <form className={styles['profile-edit-form']} onSubmit={handleSubmit}>
        <legend>Edit Profile Info</legend>
        <label htmlFor="bio">Tell Us About Yourself</label>
        <input
          name="bio"
          value={bio}
          placeholder="Tell Us About Yourself"
          onChange={(e) => setBio(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="dob">Date of Birth</label>
        <input
          name="dob"
          value={dob}
          type="date"
          onChange={(e) => setDob(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="avatar">Choose image file for Avatar</label>
        <input
          name="avatar"
          type="file"
          placeholder="Avatar"
          onChange={(e) => setAvatar(e.target.files[0])}
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};
