import React, { useEffect, useState } from 'react';
import { storedData } from '../components/Utility/bookings';

const Bookings = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const localStorageData = storedData();
        setData(localStorageData);
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto'>
            {
                data.map(doctor=> <h3>{doctor.name}</h3>)
            }
        </div>
    );
};

export default Bookings;