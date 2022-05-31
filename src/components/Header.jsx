import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { signOut } from '../utils/fetch-utils';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const auth = useAuth();
  console.log('USER', auth);

  const handleLogOut = () => {
    window.localStorage.removeItem('user');
    auth.setUser('');
    signOut();
  };

  const logout = (
    <>
      {' | '}
      <Link
        to={{ pathname: '/auth', state: { from: location } }}
        onClick={handleLogOut}
      >
        LogOut
      </Link>
    </>
  );
  return (
    <>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/watch">Detail</Link>
      {' | '}
      <Link to="/upload">Upload</Link>
      {' | '}
      {auth.user ? (
        <Link to={`/profile/${auth.user.id}/edit`}>Edit Profile</Link>
      ) : null}
      {' | '}
      <Link onClick={() => console.log('Iwas clicked')} to="/profile/history">
        History
      </Link>
      {auth.user ? logout : null}
    </>
  );
};
