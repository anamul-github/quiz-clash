import React from 'react';

const Quiz = ({ quiz }) => {
    const { question, options } = quiz;
    return (
        <div>
            <h3 className='px-5 py-2'>Q:{question.slice(3, -4)}</h3>
            <h5 className='px-5'>{options.map(option => <p>{option}</p>)}</h5>
        </div>
    );
};

export default Quiz;