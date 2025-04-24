import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='bg-transparent py-6 text-black'>
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='rounded-none'><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/my-bookings">My-Bookings</NavLink></li>
                            <li><NavLink to="/blogs">Blogs</NavLink></li>
                            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="/assets/logo.png" alt="" />
                        <a className="text-3xl font-bold">Phudu</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg gap-6">
                        <li className='rounded-none'><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/my-bookings">My-Bookings</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='bg-[#176AE5] px-6 py-3 rounded-full text-white font-medium'>Emergency</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;