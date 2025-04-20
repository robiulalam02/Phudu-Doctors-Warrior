import React from 'react';
import Hero from '../components/Hero/Hero';
import BestDoctors from '../components/BestDoctors/BestDoctors';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Hero></Hero>
            <BestDoctors></BestDoctors>
        </div>
    );
};

export default Home;