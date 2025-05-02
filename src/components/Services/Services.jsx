import React from 'react';
import CountUp from 'react-countup';

const Services = () => {
    return (
        <div className='mb-20 px-5 md:px-0 text-black'>
            <div className='text-center px-0 md:px-40 mb-5'>
                <h3 className='text-3xl font-bold mb-5'>We Provide Best Medical Services</h3>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-0 md:px-5 lg:px-0 gap-5'>
                <div className='bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-xl p-10 flex flex-row md:flex-col gap-5 justify-center'>
                    <div>
                        <img src="/assets/success-doctor.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-6xl font-bold'>
                            <CountUp
                                start={0}
                                end={199}
                                duration={7}
                            />+
                        </h3>
                        <p className='text-lg font-medium'>Total Doctors</p>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-xl p-10 flex flex-row md:flex-col gap-5 justify-center'>
                    <div>
                        <img src="/assets/success-review.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-6xl font-bold'>
                            <CountUp
                                start={0}
                                end={467}
                                duration={7}
                            />+
                        </h3>
                        <p className='text-lg font-medium'>Total Reviews</p>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-xl p-10 flex flex-row md:flex-col gap-5 justify-center'>
                    <div>
                        <img src="/assets/success-patients.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-6xl font-bold'>
                            <CountUp
                                start={0}
                                end={1900}
                                duration={7}
                            />+
                        </h3>
                        <p className='text-lg font-medium'>Patients</p>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-xl p-10 flex flex-row md:flex-col gap-5 justify-center'>
                    <div>
                        <img src="/assets/success-staffs.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-6xl font-bold'>
                            <CountUp
                                start={0}
                                end={300}
                                duration={7}
                            />+
                        </h3>
                        <p className='text-lg font-medium'>Total Stuffs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;