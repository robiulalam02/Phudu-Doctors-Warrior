import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from './App'
import Home from './Pages/Home';
import Details from './Pages/Details';

const Rout = createBrowserRouter([
    {
      path: "/",
      Component: App,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: 'details/:id',
          loader: ()=> fetch('/doctorsData.json'),
          Component: Details
        }
      ]
    },
  ]);

export default Rout;