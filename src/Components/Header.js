import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/planet.png';

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav>
      <Link className="rockets" to="/">Rockets</Link>
      <Link className="missions" to="/">Missions</Link>
      <Link className="profile" to="/">Profile</Link>
    </nav>
  </header>
);

export default Header;
