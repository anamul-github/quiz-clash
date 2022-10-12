import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';

const Statistics = () => {
    let data = useLoaderData();
    data = data.data;
    return (
        <div>
            <h2 className='my-3 ms-5'>Total number of Quiz by each skills: </h2>
            <BarChart width={370} height={280} data={data}>
                <Bar dataKey="total" fill="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
                <Legend />
            </BarChart>
        </div>
    );
};

export default Statistics;