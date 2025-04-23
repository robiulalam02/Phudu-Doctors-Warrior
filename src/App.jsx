import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>

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
