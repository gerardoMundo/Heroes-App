import { Routes, Route } from 'react-router-dom';

import { HeroRoutes } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<HeroRoutes />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </>
  );
};
