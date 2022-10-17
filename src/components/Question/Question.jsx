import React from 'react';
import { Toast } from 'react-bootstrap';
import './Question.css' ;

const Question = (props) => {
     const {options, question , correctAnswer }=props.detail;

     const optionClicked = (option) =>{
            if(option === correctAnswer){
               alert("Correct Answer");
            }
            else{
                alert("Wrong Answer");
            }
      }

     
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
                                <div onClick={ () => optionClicked(option) }  className='text-center border border-1 p-4 m-5 rounded-pill fs-4 option-select'>
                                   <div >{option}</div>
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