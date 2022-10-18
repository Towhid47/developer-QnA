import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css' ;

/////Hero Eye Icon import

 
const Question = (props) => {
     const {options, question , correctAnswer }=props.detail;


     ////// The Purpose of optionClicked() Function is to display a Toast while user click the specific option.
     const optionClicked = (option) =>{
            if(option === correctAnswer){
              return  toast.success("Correct Answer");
            }
            else{
              return  toast.error("Wrong Answer");
            }
      }
     /////////////////////////////////////////////////////////////////////////////////////////////
     




    return (
        <div>
            <div className='border border-info rounded-5 my-5 question-container'>
                <div>
                    <h3 className='m-5'>{question}</h3>
                    
                    {/* Eye icon container */}
                     <div>
                          

                     </div>



                </div>
                <div>
                     {
                        options.map(option => {
                          return <>
                                <div className='text-center border border-1 p-4 m-5 rounded-pill fs-4 option-select'>
                                   <div onClick={ () => optionClicked(option) } >{option}</div>
                                   <ToastContainer></ToastContainer>
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