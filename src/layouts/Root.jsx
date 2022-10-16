import React from 'react';
import Blog from '../components/Blog/Blog';
import Home from '../components/Home/Home';
import Navigationbar from '../components/Navigationbar/Navigationbar';
import Statistics from '../components/Statistics/Statistics';
import Topics from '../components/Topics/Topics';


const Root = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Home></Home>
            <Topics></Topics>
            <Statistics></Statistics>
            <Blog></Blog>
        </div>
    );
};

export default Root;