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
        this.moveScroll = this.moveScroll.bind(this);

        this.state = {
            mouseDown: false
        }
    }

    updateHeight(){
        $('.scroll-btn').css('top', `${window.scrollY*this.percentDiff}px`);
    }

    moveScroll(event){
        if(this.state.mouseDown){
            let y = event.clientY - this.btnHeight;
            if(y > this.trackHeight){
                y = this.trackHeight;
            }
            else if(y < 0){
                y = 0;
            }
            $('.scroll-btn').css('top', `${y}px`);
            // const y = document.querySelector('.scroll-btn').scrollTop / this.percentDiff;
            // window.scrollTo(0, y);
        }
    }

    handleEvent = (event) => {
        if (event.type === "mousedown") {
            this.setState({ mouseDown: true });            
        } else {
            this.setState({ mouseDown: false });
        }
    }

    componentDidMount(){
        this.totalHeight = (document.body.offsetHeight-window.innerHeight)+100;
        this.btnHeight = document.querySelector('.scroll-btn').clientHeight;
        this.trackHeight = document.querySelector('.scroll-track').clientHeight - this.btnHeight;
        this.percentDiff = this.trackHeight / this.totalHeight;

        window.addEventListener('scroll', this.updateHeight);        
        window.addEventListener('mousemove', this.moveScroll); 
        window.addEventListener('mouseup', this.handleEvent); 
    }

    componentWillUnmount() { 
        window.removeEventListener('scroll', this.updateHeight); 
        window.removeEventListener('mousemove', this.moveScroll); 
        window.removeEventListener('mouseup', this.handleEvent);
    }

    render() {
        return (
            <div className='scroll-track'>
                <div className='scroll-btn' onMouseDown={this.handleEvent}>
                </div>
            </div>
        );
    }    
}

export default ScrollBar;