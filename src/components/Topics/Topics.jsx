import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const loadTopics = useLoaderData();
    const topics = loadTopics.data;

    return (
       <div>
           <h2 className='mt-5'>Choose The Topic which You want to Take Quiz.</h2>
           <div className='d-lg-flex justify-content-between mt-5 container'>
            {  
               topics.map(topic => <Topic key={topic.id}
                                          topic={topic}></Topic> ) 
            }      
           </div>
       </div>
    );
};

export default Topics;