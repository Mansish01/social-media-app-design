import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/Profile/Profile';
import Home from './pages/home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import { Home } from '@mui/icons-material'; 
// masala dimag kharab garis taile mero 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "register",
    element: <Register />,
  },

  {
    path: "profile",
    element: <Profile />,
  },



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router}/>
);

