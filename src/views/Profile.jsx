import { useAuth } from '../hooks/useAuth';

export const Profile = () => {
  const { user } = useAuth();
  console.log('USER IN PROFILE', user);
  return (
    <>
      <h1>{user.username}</h1>
      {user.avatar ? (
        <img src={user.avatar}></img>
      ) : (
        <p>No avatar to display</p>
      )}
      {user.bio ? <p>{user?.bio}</p> : <p>No bio to display</p>}
      {user.dob ? <p>{user?.dob}</p> : <p>No Date of Birth to display</p>}
    </>
  );
};
