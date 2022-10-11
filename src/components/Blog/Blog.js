import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <Accordion className='w-75 m-auto w-sm-100 accordion' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>#1 What is the purpose of React Router?</h3></Accordion.Header>
                    <Accordion.Body>
                        <h5 className='text-gray'>
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            <br /> <br />
                            We need React Router for our app because we simply couple a component with a specific route, which makes our root component (normally called App) clear, maintainable and readable. Without router, either the root component or state would be messy and hard to maintain.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>#2 How does context API work?</h3></Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                            <br /> <br />
                            It is a built-in API introduced in React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h3>#3 Tell us about useRef Hook.</h3></Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;