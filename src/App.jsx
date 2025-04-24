import React, { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Loading from './Pages/Loading';

function App() {

  const navigate = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      {navigate.state === "loading" && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
          <span className="loading loading-bars loading-xl text-blue-500"></span>
        </div>
      )}
      { loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
          <span className="loading loading-bars loading-xl text-blue-500"></span>
        </div>
      )}

      <Loading></Loading>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <ToastContainer />
    </>
  )
}

export default App;
