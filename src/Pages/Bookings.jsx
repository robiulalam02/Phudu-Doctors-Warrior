import React, { useEffect, useState } from 'react';
import { removeLocalStorage, storedData } from '../components/Utility/bookings';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Appoinments from '../components/Appoinments/Appoinments';
import Footer from '../components/Footer/Footer';
import { NavLink } from 'react-router';

const Bookings = () => {
    const [data, setData] = useState([]);


    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    useEffect(() => {
        const localStorageData = storedData();
        setData(localStorageData);
    }, [])

    const handleDelete = id => {
        removeLocalStorage(id);
        setData(storedData)
    }


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const noBookAppoinmentMsg = <div className='pb-60 text-center px-0 md:px-40 py-14 rounded-2xl'>
        <h3 className='text-3xl font-bold mb-5'>You have not Booked any appoinment yet</h3>
        <p>
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        </p>
        <NavLink to="/">
            <button className='bg-[#176AE5] px-6 py-3 mt-5 rounded-lg text-white font-medium'>Book an Appoinment</button>
        </NavLink>
    </div>

    return (
        <div>
            {
                data.length === 0 ? noBookAppoinmentMsg :
                    <div className='max-w-screen-xl mx-auto flex flex-col justify-center'>
                        <div className='bg-white p-10 rounded-2xl flex justify-center h-[300px] md:h-[600px]'>
                                <ResponsiveContainer width={"100%"} height={"100%"}>
                                <BarChart
                                    data={data}
                                   
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis ticks={[250, 500, 750, 1000, 1200]} />
                                    <Tooltip></Tooltip>
                                    <Bar dataKey="consultationFee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                                </ResponsiveContainer>
                        </div>
                        <div>
                            <div className='text-center px-0 md:px-40 py-14 rounded-2xl'>
                                <h3 className='text-3xl font-bold mb-5'>My Today Appointments</h3>
                                <p>
                                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                                </p>
                            </div>
                            <div className='flex flex-col gap-5 mb-20'>
                                {
                                    data?.map(appoinment => <Appoinments handleDelete={handleDelete} key={appoinment.id} appoinment={appoinment}></Appoinments>)
                                }
                            </div>
                        </div>
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Bookings;