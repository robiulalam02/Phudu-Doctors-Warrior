import Hero from '../components/Hero/Hero';
import BestDoctors from '../components/BestDoctors/BestDoctors';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const doctorsData = useLoaderData();
    const [searchValue, setSearchValue] = useState(doctorsData);

    const getSearchValue = (e, value) => {
        e.preventDefault();
        const newData = doctorsData?.filter(doctor=> 
            doctor.name.toLowerCase().includes(value.toLowerCase()) ||
            doctor.education.toLowerCase().includes(value.toLowerCase()) ||
            doctor.speciality.toLowerCase().includes(value.toLowerCase())
        );
        setSearchValue(newData)
    }

    console.log(searchValue);

    return (
        <>
            <Helmet>
                <title>Phudu | Home</title>
            </Helmet>
            <div className='max-w-screen-xl mx-auto'>
                <Hero getSearchValue={getSearchValue}></Hero>
                <BestDoctors doctorsData={searchValue} searchValue={searchValue}></BestDoctors>
                <Services></Services>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;