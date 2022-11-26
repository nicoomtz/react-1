import '../../styles/components/layout/Header.css';

import React from 'react';

const Header = props => {
  return (
    <header>
      <div className='holder'>
        <img
          src='img/logo.png'
          alt='Transportes X'
          width={100}
        />
        <h1>Transportes X</h1>
      </div>
    </header>
  );
};

export default Header;
