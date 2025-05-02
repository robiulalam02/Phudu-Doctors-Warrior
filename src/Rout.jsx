import { createBrowserRouter } from 'react-router';
import App from './App'
import Home from './Pages/Home';
import Details from './Pages/Details';
import Bookings from './Pages/Bookings';
import Error from './Error/Error';
import Dynamic_Route_Error from './Error/dynamic_Route_Error';
import BLogs from './Pages/BLogs';


const Rout = createBrowserRouter([
    {
      path: "/",
      Component: App,
      children: [
        {
          index: true,
          loader: ()=> fetch('/doctorsData.json'),
          Component: Home
        },
        {
          path: 'details/:id',
          loader: ()=> fetch('/doctorsData.json'),
          Component: Details,
          ErrorBoundary: Dynamic_Route_Error          
        },
        {
          id: "invoice",
          path: 'my-bookings',
          Component: Bookings,
        },
        {
          path: 'blogs',
          Component: BLogs,
        },
      ]
    },
    {
      path: '*',
      Component: Error
    }
  ]);

export default Rout;