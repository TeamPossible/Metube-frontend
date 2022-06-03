import { useAuth } from '../hooks/useAuth';
import styles from '../App.css'

export const Profile = () => {
  const { user } = useAuth();
  console.log('USER IN PROFILE', user);
  return (
    <div className={styles['profile']}>
      <h1>{user.username}</h1>
      {user.avatar ? (
        <img src={user.avatar}></img>
      ) : (
        <p>No avatar to display</p>
      )}
      {user.bio ? <p>{user?.bio}</p> : <p>No bio to display</p>}
      {user.dob ? <p>{user?.dob}</p> : <p>No Date of Birth to display</p>}
    </div>
  );
};
