import React from 'react';
import BooztLogo from '../assets/boozt-logo.svg'; // SVGR in webpack handles the svg - no need for ReactComponent as in CRA

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <a href='/' className='header__logo'>
          <BooztLogo className='header__logo-svg'/>
        </a>
      </div>
    </header>
  );
};

export default Header;
