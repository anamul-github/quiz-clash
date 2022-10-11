import React from 'react';
import './Topic.css';

const Topic = ({ topic }) => {
    const { logo, name } = topic;
    return (
        <div className='col'>
            <div className="card">
                <img className='img-fluid p-2 logo shadow-sm' src={logo} alt="" />
                <div className='d-flex justify-content-between p-3'>
                    <div>
                        <h3>{name}</h3>

                    </div>
                    <div>
                        <button type="button" className="btn btn-primary">Start Quiz</button>
                    </div>
                </div>
            </div>
            <div className="card-body">

            </div>

        </div>
    );
};

export default Topic;