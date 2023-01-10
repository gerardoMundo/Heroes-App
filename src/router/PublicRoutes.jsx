import { AuthContext } from '../auth';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
//import { PrivateRoutes } from './PrivateRoutes';

// eslint-disable-next-line react/prop-types
export const PublicRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return !logged ? children : <Navigate to={'/marvel'} />;
};
