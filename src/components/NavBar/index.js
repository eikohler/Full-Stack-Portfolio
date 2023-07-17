import React from 'react';
import DarkModeSwitch from '../DarkModeSwitch';

function NavBar(props) {
  const {me, about, work} = props;

  return (
    <>        
      <nav className="d-sm-flex d-none flex-column align-items-start">
          <a href="#home" className={`${me && 'active'}`}>me</a>
          <a href="#about" className={`${about && 'active'}`}>about</a>
          <a href="#work" className={`${work && 'active'}`}>work</a>
      </nav>  
      <DarkModeSwitch />
    </>
  );
}

export default NavBar;