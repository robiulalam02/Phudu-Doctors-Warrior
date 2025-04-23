import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3>404 Status Not Found</h3>
            <NavLink to="/">
                <button>Home</button>
            </NavLink>
        </div>
    );
};

export default Error;