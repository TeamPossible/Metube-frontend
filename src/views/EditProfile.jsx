import { useState } from 'react';
import styles from './EditProfile.css';
import { updateProfile } from '../utils/fetch-utils';
import { useAuth } from '../hooks/useAuth';

export const EditProfile = () => {
  const { user } = useAuth();
  console.log('UUUUSSSEEERRRR', user);
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('BIO', bio);
    console.log('AVATAR', avatar);
    console.log('DOB', dob);
    const response = await updateProfile(
      user.username,
      bio,
      avatar[0],
      dob,
      user.id
    );
    console.log(response);
  };

  return (
    <div>
      <h1>You can set Profile info here</h1>
      <form className={styles['profile-edit-form']} onSubmit={handleSubmit}>
        <legend>Edit Profile Info</legend>
        <label htmlFor="bio">Tell Us About Yourself</label>
        <input
          name="bio"
          placeholder="Tell Us About Yourself"
          onChange={(e) => setBio(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="dob">Date of Birth</label>
        <input
          name="dob"
          type="date"
          onChange={(e) => setDob(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="avatar">Choose image file for Avatar</label>
        <input
          name="avatar"
          type="file"
          placeholder="Avatar"
          onChange={(e) => setAvatar(e.target.files)}
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};
