import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');
  const [id, setId] = useState(localStorage.getItem('id') || '');

  const login = (username, password, id) => {
    setUsername(username);
    setPassword(password);
    setId(id);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('id', id);
  };

  const logout = () => {
    setUsername('');
    setPassword('');
    setId('');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('id');
  };

  return (
    <AuthContext.Provider value={{ username, password, id, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
