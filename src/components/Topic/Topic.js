import React from 'react';

const Topic = ({ topic }) => {
    const { logo, name, total } = topic;
    return (
        <div className='bg-secondary'>
            <img src={logo} alt="" />
            <h2>Name: {name}</h2>
            <p><small>Total Quiz: {total}</small></p>
        </div>
    );
};

export default Topic;