import React from 'react';
import './Question.css' ;

const Question = (props) => {
    
     const {options, id , question , correctAnswer }=props.detail;
     
    return (
        <div>
            <div className='border border-info rounded-5 my-5 question-container'>
                <div>
                    <h3 className='m-5'>{question}</h3>
                </div>
                <div>
                     {
                        options.map(option => {
                          return <>
                                <div className='text-center border border-1 p-4 m-5 rounded-pill fs-4 option-select'>
                                   <p >{option}</p>
                                </div>    
                          
                          </>;
                        })
                    
                     }
                </div>
            </div>    
        </div>
    );
};

export default Question;