import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';


const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='heading-container'>
                <img className='img-fluid' src="heading.jpg" alt="heading-pic" />
                <h2 className='text-primary text-center'>Browse through our categories to find the right quiz for your skill set.</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-4 p-5 cards-container">
                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>


    );
};

export default Home;