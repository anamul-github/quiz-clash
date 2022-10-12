import React from 'react';

const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { question, options, correctAnswer } = quiz;

    return (
        <div>
            <h2>{correctAnswer}</h2>
            <h3 className='px-5 py-2'>Q:{question.slice(3, -4)}</h3>
            <h5 className='px-5'>
                {options.map(option =>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label>{option}</label>

                        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header">
                                <img src="..." class="rounded me-2" alt="..." />
                                <strong class="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div class="toast-body">
                                Hello, world! This is a toast message.
                            </div>
                        </div>

                    </div>)}

            </h5>
        </div>
    );
};

export default Quiz;