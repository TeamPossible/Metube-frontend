import React, { useEffect } from 'react';
// import { signup, signin, logout } from '../utils/fetch-utils';
import { createContext, useState } from 'react';

export const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userItem = window.localStorage.getItem('user');
    console.log(JSON.parse(userItem).profile);
    setUser(JSON.parse(userItem).profile);
  }, []);

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
}
