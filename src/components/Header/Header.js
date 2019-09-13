import React from 'react';
import logo from '../../assets/Pokemon_logo.svg'
const Header = () => (
  <header>
    <div className='Logo'>
      <img src={logo} alt={logo} />
    </div>
  </header>
);
export default Header