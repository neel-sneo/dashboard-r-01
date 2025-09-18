import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from '../pages/dashboard/dashboard';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DashBoard />} />
    </Routes>
  </Router>
);

export default AppRoutes;
