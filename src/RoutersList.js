import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// routers
import { pathUrl } from './routes';

// pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const RoutersList = () => {
  return (
    <Router>
      <Routes>
        <Route path={pathUrl.user.HomePage} exact element={<HomePage />} />
        <Route path={pathUrl.user.Courses} exact element={<></>} />
        <Route path={pathUrl.user.Activities} exact element={<></>} />
        <Route path={pathUrl.user.Achievements} exact element={<></>} />
        <Route path={pathUrl.user.Tools} exact element={<></>} />
        <Route path={pathUrl.user.Contact} exact element={<></>} />

        {/* Redirect to base if the page cannot be found */}
        <Route path="*" exact element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default RoutersList;
