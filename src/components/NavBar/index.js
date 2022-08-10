import React from 'react';
import DarkModeSwitch from '../DarkModeSwitch';

function NavBar() {
  return (
    <header className='d-flex flex-column justify-content-between'>        
        <nav>
            <span>me</span>
            <span>about</span>
            <span>work</span>
            <span>contact</span>
        </nav>  
        <DarkModeSwitch />
    </header>
  );
}

export default NavBar;