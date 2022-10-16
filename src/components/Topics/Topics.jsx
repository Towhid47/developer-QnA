import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const loadTopics = useLoaderData();
    const topics = loadTopics.data;

    return (
        <div>
            <h1>This is Topics Route: {topics.length}</h1>
            {
                
            }      
        </div>
    );
};

export default Topics;