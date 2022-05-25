import { useState } from 'react';
import { createContext } from 'react';

export const LoadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const loadingScreen = <img alt="loading-image" src="./loadGears.png"></img>;

  return (
    <LoadingContext.Provider value={{ loading, setLoading, loadingScreen }}>
      {loading ? loadingScreen : children}
    </LoadingContext.Provider>
  );
};
