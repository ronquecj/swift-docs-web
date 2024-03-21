import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Login } from './components/login/Login.jsx';
import { Signup } from './components/signup/Signup.jsx';
import { MainDashboard } from './components/main-dashboard/MainDashboard.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/dashboard', element: <MainDashboard /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
