import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';

const router = new createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: 'header',
    element: <Header></Header>
  },
  {
    path: '/about',
    element: <div>I'm in the about page</div>
  },
  {
    path: '/contact',
    element: <div>Call me right now!!</div>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
