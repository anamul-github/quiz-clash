import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <Link to='/'>Home</Link>
            <Link to='statistics'>Statistics</Link>
            <Link to='blog'>Blog</Link>
        </nav>
    );
};

export default Header;