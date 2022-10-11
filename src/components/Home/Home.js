import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';


const Home = () => {
    const topics = useLoaderData();
    return (
        <div className="row row-cols-1 row-cols-md-4 g-5 w-100 p-5 cards">
            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div>


    );
};

export default Home;