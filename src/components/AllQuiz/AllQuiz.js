import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const AllQuiz = () => {
    const allQuiz = useLoaderData();
    const questions = allQuiz.data;
    return (
        <div>
            <h2 className='text-center text-primary p-4 fw-bolder'>Here is your Quiz</h2>
            {
                questions.questions.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default AllQuiz;