import { createContext, useEffect, useState, useMemo } from 'react';
import { getAllMedia } from '../utils/fetch-utils';

export const ListContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [mediaState, setMediaState] = useState([]);

  useEffect(() => {
    getAllMedia().then((files) => setMediaState(files));
    console.log('USE EFFECT RAN');
  }, []);

  const media = useMemo(
    () => ({
      mediaState,
    }),
    [mediaState]
  );
  console.log('MEDIASTATE', mediaState);
  return (
    <ListContext.Provider value={{ media }}>{children}</ListContext.Provider>
  );
};
