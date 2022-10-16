import React from 'react';
import Home from '../components/Home/Home';
import Navigationbar from '../components/Navigationbar/Navigationbar';


const Root = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Home></Home>
        </div>
    );
};

export default Root;