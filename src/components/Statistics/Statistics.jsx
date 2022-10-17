import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
     const loadData = useLoaderData();
     console.log(loadData.data); 

    return (
        <div>
           {/* Simple Line Chart */}
            <div>
                <LineChart width={800} height={400} data={loadData.data} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#00FFFF" />
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;