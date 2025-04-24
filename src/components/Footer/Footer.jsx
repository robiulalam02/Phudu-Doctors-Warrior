import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center text-black bg-white p-10">
            <aside>
                <div className='flex items-center gap-2'>
                    <img src="/assets/logo.png" alt="" />
                    <a className="text-3xl font-bold">Phudu</a>
                </div>
                <ul className="menu menu-vertical md:menu-horizontal px-1 gap-6 text-sm">
                    <li className='rounded-none'><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/my-bookings">My-Bookings</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                </ul>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/robiulalam02' target='_blank'>
                        <FaGithub size={32}/>
                    </a>
                    <a href='https://www.linkedin.com/in/shopneel10/' target='_blank'>
                        <FaLinkedin size={32}/>
                    </a>
                    <a href='https://www.facebook.com/shopneel10' target='_blank'>
                        <FaFacebook size={32}/>
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;