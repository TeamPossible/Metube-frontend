import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export const useUser = () => {
  const userContext = useContext(UserContext);

  if (userContext === null) {
    throw new Error('User context must come from UserProvider');
  }
  return userContext;
};
