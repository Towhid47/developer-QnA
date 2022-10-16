import React from 'react';

//import Lottie Animation
import Exam from "../../Exam.json";

import Lottie from "lottie-react";

const Home = () => {
    return (
        <div className='d-flex align-items-center'>
            <header className='ms-5'>
                <h1>Welcome to <span className='text-info'>Developer QnA!</span></h1>
                <h3>Test yourself and Enhance your Knowledge in Web Development</h3>
                <p>We provide a tons of Questions about Web Development and update it every week.Here, you can choose web development Topics and can Test yourself. Which will help you to improve your knowledge and make you better than past. Several Topics are included such as : HTML, CSS , JavaScript , Git , Github , REACT JS and many more. This can also build your confidence for the Job Interview. So, what are you waiting For ? Let's Begin to Strengthen your brain.</p>
            </header>
          
          {/* this div section is for Animation */}
            <div>
                 <Lottie animationData={Exam}></Lottie>
            </div>
        </div>
    );
};

export default Home;