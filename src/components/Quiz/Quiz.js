
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { question, options, correctAnswer } = quiz;

    const notify = (option) => toast(option === correctAnswer ? 'Your answer is correct' : 'Your answer is wrong', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <div >
            <div className='d-flex justify-content-between pe-5'>
                <div>
                    <h3 className='px-5 py-2'>Q:{question.slice(3, -4)}</h3>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></p>
                </div>
            </div>
            <h5 className='px-5 ms-3'>
                {options.map(option =>
                    <div>
                        <button className='p-2 m-2 ' onClick={() => notify(option)}>{option}</button>
                        <ToastContainer></ToastContainer>
                    </div>)}

            </h5>
        </div>
    );
};

export default Quiz;