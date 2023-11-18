import * as React from 'react'
import Home from './screens/Home'
import './App.css'
import * as ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import ErrorPage from './screens/NotFoundPage';
import Listing from './screens/Listing';
import LoginPage from './screens/Login';
import SignUpPage from './screens/SignUp';

const router = createBrowserRouter([
  {
    path: '/Home',
    element:<Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Listing/:listingid',
    element: <Listing/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Login',
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/SignUp',
    element: <SignUpPage/>,
    errorElement: <ErrorPage/>
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

