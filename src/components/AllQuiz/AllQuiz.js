import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllQuiz = () => {
    let allQuiz = useLoaderData();
    allQuiz = allQuiz.data;
    console.log(allQuiz);
    return (
        <div>
            {

            }
        </div>
    );
};

export default AllQuiz;