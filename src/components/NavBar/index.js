import React from 'react';
import DarkModeSwitch from '../DarkModeSwitch';

function NavBar(props) {
  const {me, about, work, contact} = props;

  return (
    <header className='d-flex flex-column justify-content-between h-100 py-5'>        
        <nav>
            <a href="#home"><span className={`${me && 'active'}`}>me</span></a>
            <a href="#about"><span className={`${about && 'active'}`}>about</span></a>
            <a href="#work"><span className={`${work && 'active'}`}>work</span></a>
            <a href="#contact"><span className={`${contact && 'active'}`}>contact</span></a>
        </nav>  
        <DarkModeSwitch />
    </header>
  );
}

export default NavBar;