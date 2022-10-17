import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    
   const loadDetails = useLoaderData();
    const details = loadDetails.data.questions;

    return (
        <div className='my-5'>
            <h3>Quiz Topic : {loadDetails.data.name} </h3>
            <div className='container my-5 text-center'>
                 {
                    details.map(detail => <Question detail={detail}></Question> )
                 }
            </div>
        </div>
    );
};

export default Quiz;