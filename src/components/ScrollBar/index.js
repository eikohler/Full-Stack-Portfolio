import React, { Component } from 'react';
import $ from 'jquery';

class ScrollBar extends Component {
    constructor() {
        super();
        this.totalHeight = 0;
        this.trackHeight = 0;
        this.percentDiff = 0;
        this.updateHeight = this.updateHeight.bind(this);
      }

    updateHeight(){        
        $('.scroll-btn').css('top', `${window.scrollY}px`);
    }

    componentDidMount(){
        this.totalHeight = $(document).height();
        this.trackHeight = $('.scroll-track').height();
        this.percentDiff = this.trackHeight / this.totalHeight;

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