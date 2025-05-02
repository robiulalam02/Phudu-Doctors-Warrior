import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { NavLink } from 'react-router';
import { PiHouseLineBold } from 'react-icons/pi';
import { Helmet } from 'react-helmet-async';

const Error = () => {
    return (
        <>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='h-screen max-w-screen-xl mx-auto bg-[url(/assets/404_error.svg)] bg-no-repeat bg-contain bg-center text-center'>
                <div className='flex justify-center'>
                    <NavLink to="/">
                        <button className='px-6 py-3 flex items-center gap-1 rounded-full border border-[#176AE5] text-[#176AE5] font-medium hover:text-white hover:bg-[#176AE5] transition ease-in-out'><PiHouseLineBold size={20} /> <span>Back Home</span></button>

                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Error;