import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function DarkModeSwitch() {
    const [showDarkMode, setShowDarkMode] = useState(false);

    // useEffect(() => {
    //     const data = localStorage.getItem('dark_mode_theme');
    //     console.log(data);
    //     if(data) {
    //         setShowDarkMode(data);
    //     }   
    // }, []);

    useEffect(() => {
        console.log(showDarkMode);
        // localStorage.setItem('dark_mode_theme', showDarkMode);
        if(showDarkMode){
            console.log("darkmode");
            document.documentElement.setAttribute('data-theme', 'dark');
        }else{
            console.log("lightmode");
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