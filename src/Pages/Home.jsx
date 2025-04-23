import Hero from '../components/Hero/Hero';
import BestDoctors from '../components/BestDoctors/BestDoctors';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

const Home = () => {

    return (
        <>
            <div className='max-w-screen-xl mx-auto'>
                <Hero></Hero>
                <BestDoctors></BestDoctors>
                <Services></Services>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;