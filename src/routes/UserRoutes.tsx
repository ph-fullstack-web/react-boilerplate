import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFoundPage, WelcomePage, ToDoList} from 'components/pages';
import {PagePaths} from './PagePaths';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path={PagePaths.Welcome} element={<WelcomePage />} />
      <Route path={PagePaths.ToDoList} element={<ToDoList />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
