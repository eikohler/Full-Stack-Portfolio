import React from 'react';
import DarkModeSwitch from '../DarkModeSwitch';

function NavBar(props) {
  const {me, about, work, contact} = props;

  return (
    <header className='d-flex flex-column justify-content-between'>        
        <nav>
            <span className={`${me && 'active'}`}>me</span>
            <span className={`${about && 'active'}`}>about</span>
            <span className={`${work && 'active'}`}>work</span>
            <span className={`${contact && 'active'}`}>contact</span>
        </nav>  
        <DarkModeSwitch />
    </header>
  );
}

export default NavBar;