import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/watch">Detail</Link>
      {' | '}
      <Link to="/upload">Upload</Link>
      {' | '}
      <Link to="/profile/history">History</Link>
    </>
  );
};
