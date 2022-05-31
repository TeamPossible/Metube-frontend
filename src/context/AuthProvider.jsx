import React, { useEffect } from 'react';
// import { signup, signin, logout } from '../utils/fetch-utils';
import { createContext, useState } from 'react';

export const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      window.localStorage.getItem('user')
        ? setUser(JSON.parse(window.localStorage.getItem('user')).profile)
        : setUser({ profile: {} });
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
}
