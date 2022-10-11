import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';


const Home = () => {
    const topics = useLoaderData();
    console.log(topics);
    return (
        // <div className='topics'>
        //     {
        //         topics.data.map(topic => <Topic
        //             key={topic.id}
        //             topic={topic}
        //         ></Topic>)
        //     }
        // </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                    {
                        topics.data.map(topic => <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>)
                    }
                    <div className="card-body">

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;