import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';

function App() {

  return (
    <>

      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>

    </>
  )
}

export default App;
