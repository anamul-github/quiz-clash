import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const AllQuiz = () => {
    let questions = useLoaderData();
    questions = questions.data;
    console.log(questions);
    return (
        <div>
            {
                questions.map(question => <Quiz
                    key={question.id}
                    question={question}
                ></Quiz>)
            }

        </div>
    );
};

export default AllQuiz;