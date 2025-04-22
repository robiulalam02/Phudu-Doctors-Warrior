import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setLocalData } from '../components/Utility/bookings';

const Details = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const convertedId = parseInt(id)
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const filteredData = data.find(doctor => doctor.id === parseInt(convertedId));
        setDetails(filteredData)
    }, [data, convertedId])

    const handleBookAppoinment = (data) => {
        setLocalData(data);
    }


    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center px-40 py-14 rounded-2xl mb-5 bg-white'>
                <h3 className='text-3xl font-bold mb-5'>Doctor’s Profile Details</h3>
                <p>
                    Explore each doctor's profile to learn about their qualifications, specialties, experience, and patient feedback — helping you choose the right care with confidence.
                </p>

            </div>

            <div className='flex items-center p-10 bg-white rounded-2xl gap-6 mb-5'>
                <div className='w-[300px] h-[350px] overflow-hidden rounded-xl'>
                    <img className='h-full w-full object-cover' src={details.image} alt="" />
                </div>

                <div className='flex flex-col justify-between gap-5 h-full w-full'>
                    <h1 className='text-3xl font-bold'>{details.name}</h1>
                    <div className='flex flex-col'>
                        <span>{details.education}</span>
                        <span>{details.speciality}</span>
                    </div>
                    <div>
                        <span>Working at</span>
                        <p className='font-bold'>{details.workingPlace}</p>
                    </div>
                    <div className='border-dashed border-gray-400 border-t border-b py-3'>
                        <p>Reg No: {details.registrationNumber}</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='font-bold'>Availability</span>
                        {
                            details.workingDays?.map((days, index) => <span className='py-1 px-3 bg-[#FFA00033] text-[#FFA000] rounded-full' key={index}>{days}</span>)
                        }
                    </div>
                    <p className='font-bold'>Consultation Fees: <span className='text-[#176AE5]'>Taka: {details.consultationFee}</span> <span className='font-normal text-gray-400'>(including VAT)</span> <span className='text-[#176AE5]'>Per consultation</span></p>
                </div>

            </div>

            <div className='bg-white rounded-2xl p-10 mb-20'>
                <h3 className='text-center font-bold text-2xl mb-4'>Book an Appointment</h3>
                <div className='flex items-center justify-between border-dashed py-3 border-gray-400 border-b border-t'>
                    <p className='font-bold'>Availability</p>
                    <span className='bg-[#09982F33] text-[#09982F] py-1 px-3 rounded-full'>Doctor Available Today</span>
                </div>
                <div className='w-[90%] mt-4'>
                    <p className='py-1 px-3 bg-[#FFA00033] text-[#FFA000] rounded-full'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                </div>
                <button onClick={()=>handleBookAppoinment(details)} className='text-white border w-full bg-[#176AE5] py-2 rounded-full font-bold mt-10'>Book Appointment Now</button>
            </div>
        </div>
    );
};

export default Details;