import { useContext } from 'react';
import { ListContext } from '../context/DataProvider';

export const useData = () => {
  const context = useContext(ListContext);

  if (context === null) {
    throw new Error('Context Must Come From Provider');
  }

  return context;
};
