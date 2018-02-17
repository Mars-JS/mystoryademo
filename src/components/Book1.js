import React, { Component } from 'react';
import { render } from 'react-dom'

import anime from 'animejs';
import FlipPage from 'react-flip-page';

class Book1 extends Component {

    render() {
        return (
            <div className='center-block' >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="container-fluid">
                <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12 col-sm-offset-6 col-md-offset-6 col-lg-offset-6'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12'>
                            <span>Title: My Life </span>
                        </div>
                    </div>
                    <div className='row'>
                        
                        <div className='col-sm-12 col-md-12 col-lg-12'>
                            <FlipPage orientation="horizontal" maxAngle="65" uncutPages="true" showSwipeHint="true" showHint="true" flipOnTouch="true">

                                <img className="img-responsive" src={require("../img/newstory1.png")} style={{ height: '480px', width: '240px' }} />
                                <img className="img-responsive" src={require("../img/popstory1.jpg")} style={{ height: '480px', width: '240px' }} />
                                <img className="img-responsive" src={require("../img/book2.jpg")} style={{ height: '480px', width: '240px' }} />
                                <img className="img-responsive" src={require("../img/amazon.jpg")} style={{ height: '480px', width: '240px' }} />

                            </FlipPage>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <span>...all those memories, moments in time... lost, like tears in the rain... </span>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                </div>
                </div>
            </div>   
        );
    }

}

export default Book1;

