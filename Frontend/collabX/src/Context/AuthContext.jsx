import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');

  const login = (username, password) => {
    setUsername(username);
    setPassword(password);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  };

  const logout = () => {
    setUsername('');
    setPassword('');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  };

  return (
    <AuthContext.Provider value={{ username, password, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
