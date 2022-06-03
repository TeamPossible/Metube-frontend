import { useState } from 'react';
import styles from '../App.css';

export const EditProfile = () => {
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [avatar, setAvatar] = useState('');

  return (
    <div className={styles['edit-prof']}>
      <h1>You can set Profile info here</h1>
      <form className={styles['profile-edit-form']}>
        <legend>Edit Profile Info</legend>
        <label htmlFor="bio">Tell Us About Yourself</label>
        <input name="bio" placeholder="Tell Us About Yourself"></input>
        <br></br>
        <label htmlFor="dob">Date of Birth</label>
        <input name="dob" type="date"></input>
        <br></br>
        <label htmlFor="avatar">Choose image file for Avatar</label>
        <input name="avatar" type="file" placeholder="Avatar"></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};
