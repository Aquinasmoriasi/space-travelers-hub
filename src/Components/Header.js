import React from 'react';
import logo from '../Assets/planet.png';
import NavLinks from './NavLink';

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav>
      <NavLinks />
    </nav>
  </header>
);

export default Header;
