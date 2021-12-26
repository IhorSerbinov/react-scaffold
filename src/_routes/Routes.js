import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import pageUrls from '_constants/urls';
import history from '_helpers/history';
import StartPage from '_pages/StartPage';

function AppRoutes () {
  return (
    <div>
      <Router history={history}>
        <Routes>
          <Route path={pageUrls.start} element={<StartPage />} exact />
          
          <Route path='/' element={<StartPage />} />
          <Route path='*' element={<StartPage />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
