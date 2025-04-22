import React from 'react';
import CountUp from 'react-countup';

const Services = () => {
    return (
        <div className='mb-20'>
            <div className='text-center px-40 mb-5'>
                <h3 className='text-3xl font-bold mb-5'>Our Best Doctors</h3>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                <div className='bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-xl p-10 flex flex-col gap-5'>
                    <div>
                        <img src="assets/success-doctor.png" alt="" />
                    </div>
                    <h3 className='text-6xl font-bold'>
                    <CountUp
                            start={0}
                            end={199}
                            duration={5}
                        />+
                    </h3>
                    <p className='text-lg font-medium'>Total Doctors</p>
                </div>
                <div className='bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-xl p-10 flex flex-col gap-5'>
                    <div>
                        <img src="assets/success-review.png" alt="" />
                    </div>
                    <h3 className='text-6xl font-bold'>
                    <CountUp
                            start={0}
                            end={467}
                            duration={5}
                        />+
                    </h3>
                    <p className='text-lg font-medium'>Total Reviews</p>
                </div>
                <div className='bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-xl p-10 flex flex-col gap-5'>
                    <div>
                        <img src="assets/success-patients.png" alt="" />
                    </div>
                    <h3 className='text-6xl font-bold'>
                    <CountUp
                            start={0}
                            end={1900}
                            duration={5}
                        />+
                    </h3>
                    <p className='text-lg font-medium'>Patients</p>
                </div>
                <div className='bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-xl p-10 flex flex-col gap-5'>
                    <div>
                        <img src="assets/success-staffs.png" alt="" />
                    </div>
                    <h3 className='text-6xl font-bold'>
                    <CountUp
                            start={0}
                            end={300}
                            duration={5}
                        />+
                    </h3>
                    <p className='text-lg font-medium'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Services;