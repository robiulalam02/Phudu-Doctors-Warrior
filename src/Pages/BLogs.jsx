import React, { useEffect, useState } from 'react';
import Question from '../components/Question/Question';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const BLogs = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('blog_questions.json').then(res => res.json()).then(data => setQuestions(data))
    }, [])

    return (
        <>
            <Helmet>
                <title>Phudu | Blogs</title>
            </Helmet>
            <div className='max-w-screen-xl mx-auto flex flex-col gap-5 mb-20 text-black' >
                {
                    questions?.map((questionData, index) => <Question key={index} questionData={questionData}></Question>)
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default BLogs;