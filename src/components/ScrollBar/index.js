import React from 'react';
import $ from 'jquery';

class ScrollBar extends React.Component {
    constructor() {
        super();
        this.totalHeight = 0;
        this.trackHeight = 0;
    }    

    updateHeight(){
        // console.log(window.scrollY);
        $('.scroll-btn').css('top', `${window.scrollY}px`);
    }

    componentDidMount() {
        this.totalHeight = $(document).height();
        this.trackHeight = $('.scroll-track').height();

        console.log(this.totalHeight);
        console.log(this.trackHeight);

        window.addEventListener('scroll', this.updateHeight);        
    }

    componentWillUnmount() { 
        window.removeEventListener('scroll', this.updateHeight); 
    }

    render() {
        return (
            <div className='scroll-track'>
                <div className='scroll-btn'>
                </div>
            </div>
        );
    }    
}

export default ScrollBar;