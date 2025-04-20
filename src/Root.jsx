import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from './App'
import Home from './Pages/Home';

const Root = createBrowserRouter([
    {
      path: "/",
      Component: App,
      children: [
        {index: true, Component: Home},
      ]
    },
  ]);

export default Root;