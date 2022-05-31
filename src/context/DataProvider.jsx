import { createContext, useReducer, useEffect, useState, useMemo } from 'react';
import { getAllMedia } from '../utils/fetch-utils';

export const ListContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [mediaState, setMediaState] = useState([]);

  useEffect(() => {
    getAllMedia().then((files) => setMediaState(files));
  }, []);

  const media = useMemo(
    () => ({
      mediaState,
    }),
    [mediaState]
  );

  return (
    <ListContext.Provider value={{ media }}>{children}</ListContext.Provider>
  );
};
