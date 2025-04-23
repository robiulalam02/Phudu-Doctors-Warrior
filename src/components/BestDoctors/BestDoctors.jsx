import React, { useEffect, useState } from 'react';
import Doctors from './Doctors';

const BestDoctors = () => {

    const [doctors, setDoctors] = useState([]);
    const [showDoctors, setShowDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
        fetch('doctorsData.json')
        .then(res=>res.json())
        .then(data=> setDoctors(data))
    }, [])

    useEffect(() => {
        if (Array.isArray(doctors)) {
            if (showAll) {
                setShowDoctors(doctors);
            } else {
                setShowDoctors(doctors.slice(0, 6));
            }
            
        }
    }, [doctors, showAll]);

    return (
        <div className='mb-20 px-4 md:px-0'>
            <div className='text-center px-0 md:px-40 mb-5'>
                <h3 className='text-3xl font-bold mb-5'>Our Best Doctors</h3>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    showDoctors.map(doctor => <Doctors key={doctor.id} doctor={doctor}></Doctors>)
                }
            </div>

            <div className='text-center mt-12'>
                <button className='text-white font-medium bg-[#176AE5] py-3 px-6 rounded-full' onClick={() => setShowAll(!showAll)}>{
                    showAll ? 'Show Less Doctors' : 'View All Doctors'
                }</button>
            </div>

        </div>
    );
};

export default BestDoctors;