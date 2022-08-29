import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div className='logo'>
            <img src='src/Assets/planet.png'></img>
            <h1>Space Travelers' Hub</h1>
        </div>
        <nav>
            <Link className='rockets' to='/'></Link>
            <Link className='missions' to='/'></Link>
            <Link className='profile' to='/'></Link>
        </nav>
    </header>
)