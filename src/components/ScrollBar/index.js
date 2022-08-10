import React, { Component } from 'react';
import $ from 'jquery';

class ScrollBar extends Component {
    constructor() {
        super();
        this.totalHeight = 0;
        this.trackHeight = 0;
        this.btnHeight = 0;
        this.percentDiff = 0;
        this.updateHeight = this.updateHeight.bind(this);
    }

    updateHeight(){
        // console.log(window.scrollY)
        $('.scroll-btn').css('top', `${window.scrollY*this.percentDiff}px`);
    }

    componentDidMount(){
        this.totalHeight = (document.body.offsetHeight-window.innerHeight)+100;
        this.btnHeight = document.querySelector('.scroll-btn').clientHeight;
        this.trackHeight = document.querySelector('.scroll-track').clientHeight - this.btnHeight;
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