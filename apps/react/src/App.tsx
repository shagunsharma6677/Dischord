import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';
const Login = React.lazy(() => import('./components/Auth/Login'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

export default App;
