import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const initializer = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user,
  };
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, initializer);

  const login = (name = '') => {
    const user = {
      id: 'abc123',
      name,
    };

    const action = {
      type: types.loggin,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };

  const logOut = () => {
    localStorage.removeItem('user');

    const action = {
      type: types.logout,
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{ ...authState, login: login, logOut: logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
