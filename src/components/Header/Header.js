import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center header px-5'>
            <div>
                <h2 className='text-primary'>Quiz Clash</h2>
            </div>
            <div>
                <nav className='text-center links p-5'>
                    <Link className='fs-4' to='/'>Home</Link>
                    <Link className='fs-4' to='statistics'>Statistics</Link>
                    <Link className='fs-4' to='blog'>Blog</Link>
                </nav>
            </div>
        </div>

    );
};

export default Header;