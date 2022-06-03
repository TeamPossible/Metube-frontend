import { useState } from 'react';
import styles from './EditProfile.css';

export const EditProfile = () => {
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('BIO', bio);
    console.log('AVATAR', avatar);
    console.log('DOB', dob);
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
