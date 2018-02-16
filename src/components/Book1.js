import React, { Component } from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import anime from 'animejs';
import FlipPage from 'react-flip-page';

class Book1 extends Component {

    render() {
        return (
            <div className='center-block' >
                <br />
                <br />
                <div className="container">
                    <div className='row'>
                        <span>Title: My Life </span>
                        <div className='col-sm-3 col-md-6 col-lg-12'>
                            <FlipPage orientation="horizontal" >

                                <img className="" src={require("../img/newstory1.png")} style={{ height: '480px', width: '240px' }} />
                                <img className="" src={require("../img/popstory1.jpg")} style={{ height: '480px', width: '240px' }} />
                                <img className="" src={require("../img/book2.jpg")} style={{ height: '480px', width: '240px' }} />
                                <img className="" src={require("../img/amazon.jpg")} style={{ height: '480px', width: '240px' }} />

                            </FlipPage>
                        </div>
                        <div><span>...all those memories, moments in time... lost, like tears in the rain... </span></div>
                    </div>
                </div>
                <br />
                <br />
            </div>   
        );
    }

}

export default Book1;
