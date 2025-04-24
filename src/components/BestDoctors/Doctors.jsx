import React from 'react';
import { NavLink } from 'react-router';

const Doctors = ({ doctor }) => {
    const available = <span className='bg-[#09982F33] text-[#09982F] py-1 px-3 rounded-full'>Available</span>;
    const unavailable = <span className='bg-[#FFAC3326] text-[#ff6d33] py-1 px-3 rounded-full'>Unavailable</span>;
    return (
        <div className='bg-gradient-to-t from-[#FFFFFF] to-[#ffffff00] border-white border-2 p-6 rounded-2xl flex flex-col gap-4'>
            <div className='w-full h-[250px] overflow-hidden rounded-2xl'>
                <img className='w-full h-full object-cover' src={doctor.image} alt="" />
                
            </div>
            <div className='flex items-center gap-2'>
                <p>
                    {
                        doctor.availability ? available : unavailable
                    }
                </p>
                <p className='bg-[#176AE533] text-[#176AE5] py-1 px-3 rounded-full text-sm'>{doctor.experience} Experience</p>
            </div>
            <h3 className='text-xl font-bold'>{doctor.name}</h3>
            <p className='border-dashed border-b border-gray-400 pb-2'>{doctor.education}</p>
            <p>Reg No: {doctor.registrationNumber}</p>

            <NavLink to={`/details/${doctor.registrationNumber}`}>
                <button className='text-[#176AE5] border w-full border-[#176AE5] py-2 rounded-full font-bold'>View Details</button>
            </NavLink>

        </div>
    );
};

export default Doctors;