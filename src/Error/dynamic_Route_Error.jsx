import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { PiHouseLine, PiHouseLineBold } from 'react-icons/pi';
import { NavLink, useParams } from 'react-router';

const Dynamic_Route_Error = () => {
    const { id } = useParams()
    console.log(id);
    return (
        <div className='max-w-screen-xl mx-auto h-screen'>
            <div className='bg-white p-5 flex flex-col gap-5 items-center rounded-2xl'>
                <h1 className='text-3xl font-bold'>Do Doctor Found!!!</h1>
                <p>No Doctor Found with this registration No.</p>
                <p className='flex items-center'><FiPlusCircle /> {id}</p>
                <NavLink to="/">
                    <button className='bg-[#176AE5] px-6 py-3 mt-5 rounded-lg text-white font-medium'>View All Doctors</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Dynamic_Route_Error;