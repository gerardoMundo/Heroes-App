import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth';

// eslint-disable-next-line react/prop-types
export const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return logged ? children : <Navigate to={'/login'} />;
};
