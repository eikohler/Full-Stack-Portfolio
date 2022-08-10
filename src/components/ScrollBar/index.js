import React, { useEffect } from 'react';
// import $ from 'jquery';

function ScrollBar() {
    // const numberOfSections = $('.section-container').length;
    // console.log(numberOfSections);

    // const numberOfSections = 4;

    const updateHeight = () => {
        console.log(window.scrollY);
        // if (window.scrollY > 1200) {
        //   setX(classes.Swipe);
        // }
                 
        // if (window.scrollY > 927) {
        //   setNavColor('red');
        // }
            
        // setNavColor(null);
    }

    useEffect(() => {
        window.addEventListener('scroll', updateHeight);        
        return () => window.removeEventListener('scroll', updateHeight);
    },[]);

  return (
    <div className='scroll-track'>
        <div className='scroll-btn'>
        </div>
    </div>
  );
}

export default ScrollBar;