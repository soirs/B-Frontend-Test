import React from 'react';
import { ReactComponent as BooztLogo } from '../assets/boozt-logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <a href='/' className='header__logo'>
          <BooztLogo />
        </a>
      </div>
    </header>
  );
};

export default Header;
