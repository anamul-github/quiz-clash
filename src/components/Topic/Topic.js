import React from 'react';

const Topic = ({ topic }) => {
    const { logo, name } = topic;
    return (
        <div>
            <img src={logo} alt="" />
            <h2>Name: {name}</h2>
        </div>
    );
};

export default Topic;