import React from 'react';
import { FaCalendarAlt} from 'react-icons/fa';

const Question = ({ questionData }) => {
    const {question, answer, date} = questionData;
    return (
        <div className='bg-white p-5 rounded-2xl flex flex-col gap-4'>
            <h3 className='font-bold'>Q. {question}</h3>
            <div className='py-2 border-gray-300 border-y border-dashed'>
                <span className='text-blue-600'>Answere:</span>
                <p>{answer}</p>
            </div>
            <p className='flex items-center gap-2'><FaCalendarAlt color=''/>Added at: {date}</p>
        </div>
    );
};

export default Question;