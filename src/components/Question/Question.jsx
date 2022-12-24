import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css' ;

/////FontAwesome Eye Icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye , faEyeSlash } from '@fortawesome/free-solid-svg-icons'
 
const Question = (props) => {
     const {options, question , correctAnswer }=props.detail;

   
     const questionWithoutHTMLTag = question.replace(/(<([^>]+)>)/ig, '');  //// It removes HTML tags from string in JSON API  

    


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
     
     //////Show Answer

     const [isVisible , setVisible] = useState(false) ;

     const showAnswer = (isVisible) => {
         setVisible(!isVisible);
     }




    return (
        <div>
            <div className='border border-info rounded-5 my-5 question-container'>
                <div className='d-flex align-items-center justify-content-evenly'>
                    <h3 className='m-5'>{questionWithoutHTMLTag}</h3>
                    
                    {/* Eye icon container */}
                     <div onClick={ ()=> showAnswer(isVisible) } className="p-3">
                        {
                           (isVisible) ? <FontAwesomeIcon icon={faEyeSlash} className="fs-2" title='Hide the Correct Answer'></FontAwesomeIcon> : <FontAwesomeIcon icon={faEye} className="fs-2" title='See the Correct Answer'></FontAwesomeIcon> 
                        }
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
                {/* Show Correct Answer */}
                <div className={`text-center bg-success p-4 m-5 fs-4 ${isVisible ? 'd-block' : 'd-none'}`}> {correctAnswer} </div>
            </div>    
        </div>
    );
};

export default Question;