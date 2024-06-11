import Login from '@/components/Auth/Login';
import Dashboard from '@/pages/Dashboard';
import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

const AllRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
};

export default AllRoutes;
