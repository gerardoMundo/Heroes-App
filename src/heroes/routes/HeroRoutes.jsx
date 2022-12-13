import { Navigate, Route, Routes } from 'react-router-dom';

import { DcPage, HeroPage, MarvelPage, Search } from '../pages';
import { Navbar } from '../../ui';

export const HeroRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />
          <Route path='hero' element={<HeroPage />} />
          <Route path='search' element={<Search />} />
          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};
