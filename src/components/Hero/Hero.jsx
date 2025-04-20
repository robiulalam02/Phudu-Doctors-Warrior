import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[#FFFFFF] p-12 rounded-3xl text-center flex flex-col justify-between items-center gap-5 mb-20'>
            <div className='px-44 flex flex-col gap-5'>
                <h1 className='text-4xl font-bold'>Dependable Care, Backed by Trusted Professionals.</h1>
                <p className='text-sm'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='flex items-center w-full justify-center gap-4'>
                <div className='w-5/12'>
                    <input className='bg-white border w-full py-2 px-4 rounded-full' placeholder='search any doctor...' type="text" name="" id="" />
                </div>
                <div>
                    <button className='bg-[#176AE5] px-6 py-3 rounded-full text-white font-medium'>Search Now</button>  
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <img src="/assets/banner-img-1.png" alt="" />
                <img src="/assets/banner-img-1.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;