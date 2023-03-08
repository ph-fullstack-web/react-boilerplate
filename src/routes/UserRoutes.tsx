import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFoundPage, WelcomePage} from 'components/pages';
import {PagePaths} from './PagePaths';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path={PagePaths.Welcome} element={<WelcomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
