import React, { useState } from 'react';
import './NaviBar.css';

const NaviBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className='navbar'>
      <img className={`navbar-logo ${navOpen && 'spin'}`} src='eq.png' alt='logo' onClick={handleNavClick} />

      <div className={`overlay ${navOpen ? 'open' : ''}`}>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Services</a>
        <a href='#'>Contact</a>
      </div>
    </nav>
  );
};

export default NaviBar;
