import { Routes, Route } from 'react-router-dom';

import { HeroRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='/*'
          element={
            <PrivateRoutes>
              <HeroRoutes />
            </PrivateRoutes>
          }
        />

        <Route
          path='/login'
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />
      </Routes>
    </>
  );
};
