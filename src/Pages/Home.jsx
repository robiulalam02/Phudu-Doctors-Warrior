import Hero from '../components/Hero/Hero';
import BestDoctors from '../components/BestDoctors/BestDoctors';
import Services from '../components/Services/Services';

const Home = () => {

    return (
        <div className='max-w-screen-xl mx-auto'>
            <Hero></Hero>
            <BestDoctors></BestDoctors>
            <Services></Services>
        </div>
    );
};

export default Home;