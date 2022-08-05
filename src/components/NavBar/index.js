import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        if(isDarkMode){
            document.documentElement.setAttribute('data-theme', 'light');
        }else{
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    }

  return (
    <header className='d-flex flex-column justify-content-between h-100'>        
        <nav>
            <span>me</span>
            <span>about</span>
            <span>work</span>
            <span>contact</span>
        </nav>  
        <span className='mode-switch' onClick={() => toggleDarkMode()}>
            {!isDarkMode ? <FontAwesomeIcon icon={faMoon} size="2x" />
            : <FontAwesomeIcon icon={faSun} size="2x"  />}
        </span>
    </header>
  );
}

export default NavBar;