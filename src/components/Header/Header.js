import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='text-center navigation p-5'>
            <Link className='fs-4' to='/'>Home</Link>
            <Link className='fs-4' to='statistics'>Statistics</Link>
            <Link className='fs-4' to='blog'>Blog</Link>
        </nav>
    );
};

export default Header;