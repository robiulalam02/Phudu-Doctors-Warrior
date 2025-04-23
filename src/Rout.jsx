import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from './App'
import Home from './Pages/Home';
import Details from './Pages/Details';
import Bookings from './Pages/Bookings';
import Error from './Error/Error';
import Dynamic_Route_Error from './Error/dynamic_Route_Error';

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
          Component: Details,
          ErrorBoundary: Dynamic_Route_Error
        },
        {
          path: 'my-bookings',
          Component: Bookings,
        },
      ]
    },
    {
      path: '*',
      Component: Error
    }
  ]);

export default Rout;