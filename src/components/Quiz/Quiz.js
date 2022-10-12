import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { question, options, correctAnswer } = quiz;

    const notify = () => toast('Wow, so easy');

    return (
        <div>
            <h2>{correctAnswer}</h2>
            <h3 className='px-5 py-2'>Q:{question.slice(3, -4)}</h3>
            <span><FontAwesomeIcon icon="fa-solid fa-eye" /></span>
            <h5 className='px-5'>
                {options.map(option =>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label onClick={notify}>{option}</label>
                        <ToastContainer />

                    </div>)}

            </h5>
        </div>
    );
};

export default Quiz;