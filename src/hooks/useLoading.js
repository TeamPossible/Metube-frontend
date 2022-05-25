import { useContext } from 'react';
import { LoadingContext } from '../context/Loading';

export const useLoading = () => {
  const loadContext = useContext(LoadingContext);

  if (loadContext === null) {
    throw new Error('Loading Context must be wrapped in Loading Provider');
  }

  return loadContext;
};
