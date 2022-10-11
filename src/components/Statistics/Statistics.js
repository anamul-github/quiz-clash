import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';

const Statistics = () => {
    let data = useLoaderData();
    data = data.data;
    return (
        <div>
            <h2>Statistics of total number of Quiz </h2>
            <BarChart width={500} height={300} data={data}>
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