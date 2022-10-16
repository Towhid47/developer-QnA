import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const loadTopics = useLoaderData();
    const topics = loadTopics.data;

    return (
        <div className='d-lg-flex justify-content-between mt-5 container'>
            {  
               topics.map(topic => <Topic key={topic.id}
                                          topic={topic}></Topic> ) 
            }      
        </div>
    );
};

export default Topics;