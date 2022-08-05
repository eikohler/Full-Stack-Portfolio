import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <header className='d-flex flex-column justify-content-between h-100'>        
        <nav>
            <span>me</span>
            <span>about</span>
            <span>work</span>
            <span>contact</span>
        </nav>  
        <span>
            <FontAwesomeIcon icon={faMoon} size="2x" />
        </span>
    </header>
  );
}

export default NavBar;