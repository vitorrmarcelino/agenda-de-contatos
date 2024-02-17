/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';
import api from '../api/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStorageData = async () => {
      const storageUser = localStorage.getItem('user');
      const storageToken = localStorage.getItem('token');

      if (storageToken && storageUser) {
        setUser(storageUser);
      }
    };
    loadingStorageData();
  }, []);

  // eslint-disable-next-line consistent-return
  const login = async (email, password) => {
    try {
      const response = await api.post('users/login', {
        email, password,
      });

      setUser(response.data.user);

      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      signed: !!user,
      login,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}
