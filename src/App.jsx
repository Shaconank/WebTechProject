import * as React from 'react'
import Home from './screens/Home'
import './App.css'
import * as ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* export default function App(){

  return(
    <Home/>
  )
} */

