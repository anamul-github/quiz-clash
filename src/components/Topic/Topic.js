import React from 'react';
import './Topic.css';

const Topic = ({ topic }) => {
    const { logo, name } = topic;
    return (
        <div className='col'>
            <div className="card card-style">
                <img className='img-fluid logo' src={logo} alt="" />
                <div className='d-flex justify-content-between p-3 mt-2'>
                    <div>
                        <h4 className='text-white'>{name}</h4>

                    </div>
                    <div>
                        <button type="button" className="btn btn-primary">Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;