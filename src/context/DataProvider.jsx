import { createContext, useReducer } from 'react';

export const ListContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [list, dispatch] = useReducer(reducer);

  return (
    <ListContext.Provider value={{ list }}>{children}</ListContext.Provider>
  );
};
