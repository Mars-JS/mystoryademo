import React, { Component } from "react";
import "../App.css";
import ReadBookShelf from './ReadBookShelf';
import Search from './landing/Search';
import { Textfit } from 'react-textfit';
import FlipPage from 'react-flip-page';

class Book7 extends Component {
    render() {
        return (
            <div className='container'>

                <div className='row' style={{ marginTop: '10%'}}>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <FlipPage flipOnTouch='true' loopForever='true' height='720' width='1280px' orientation='horizontal' uncutPages='true' maxAngle='65' animationDuration='400' >
                            <article>
                                    <img className="img-responsive" src={require("../img/rihannaPage0.jpg")}/>
                                    <h1 style={{ margin: 'auto', width: '35%' }}>My Life in 2018</h1>
                            </article>
                            <article>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome first article</h1>
                                        <p>My awesome first content</p>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome h1 article</h1>
                                        <p>My awesome p1 content</p>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 2 article</h1>
                                        <p>My awesome 2 content</p>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 2.5 article</h1>
                                        <p>My awesome 2.5 content</p>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 3 article</h1>
                                        <p>My awesome 3 content</p>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 3.5 article</h1>
                                        <p>My awesome 3.5 content</p>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 3 article</h1>
                                        <p>My awesome 3 content</p>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6'>
                                        <h1>My awesome 3.5 article</h1>
                                        <p>My awesome 3.5 content</p>
                                    </div>
                                </div>
                            </article>
                        </FlipPage>
                    </div>
                </div>

                <Search />
                <ReadBookShelf />

            </div>
        );
    }
}

export default Book7;