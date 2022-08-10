import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function DarkModeSwitch() {
    const mode = JSON.parse(localStorage.getItem('dark_mode_theme')) || false;
    const [showDarkMode, setShowDarkMode] = useState(mode);

    useEffect(() => {
        localStorage.setItem('dark_mode_theme', showDarkMode);
        if(showDarkMode){
            document.documentElement.setAttribute('data-theme', 'dark');
        }else{
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [showDarkMode]);

  return (
    <span className='mode-switch' onClick={()=>setShowDarkMode(!showDarkMode)}>
        {showDarkMode ? <FontAwesomeIcon icon={faSun} size="2x" />
        : <FontAwesomeIcon icon={faMoon} size="2x" />}
    </span>
  );
}

export default DarkModeSwitch;