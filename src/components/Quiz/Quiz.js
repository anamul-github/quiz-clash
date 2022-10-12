import React from 'react';

const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { question, options, correctAnswer } = quiz;
    const handleClick = (click) => {
        if (click === correctAnswer) {
            alert("Right");
        }

    }
    return (
        <div>
            <h2>{correctAnswer}</h2>
            <h3 className='px-5 py-2'>Q:{question.slice(3, -4)}</h3>
            <h5 className='px-5'>
                {options.map(option =>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label onclick={handleClick()}>{option}</label>

                    </div>)}

            </h5>
        </div>
    );
};

export default Quiz;