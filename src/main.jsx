import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from 'react-router';
import React from 'react';
import Root from './root/Root.jsx';
import Home from './home/Home.jsx';
import Login from './login/Login.jsx';
import About from './about/About.jsx';
import Career from './career/Career.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/career',
        element: <Career></Career>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
