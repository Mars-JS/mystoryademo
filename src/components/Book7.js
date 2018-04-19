import React, { Component } from "react";
/* import ReadBookShelf from './ReadBookShelf'; */
import BookShelfNew from './bookshelf/BookShelfNew';
import FlipPage from 'react-flip-page';
import { Button, Overlay, OverlayTrigger, Popover } from 'react-bootstrap';

class Book7 extends Component {
    renderFollow() {
        const popoverHoverFocus = (
            <Popover id="popover-trigger-hover-focus" title="Hide / Show Followers">
                If you hide your followers, no one will be able to see how many followers you have or who you're following.
            </Popover>
        );

        if (this.state.showFollow) {
            return (
                <div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><button className='whiteBtnSoc socialBtn'>1,111 Following </button></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><button className='whiteBtnSoc socialBtn'>2,222 followers </button></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><button className='whiteBtnSoc socialBtn'>3,333 stories </button></div>

                    <div>
                        <OverlayTrigger
                            trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
                            <Button className='hideFollowBtn' onClick={this.handleDismissFollow}> hide </Button>
                        </OverlayTrigger>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                <div>
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="bottom"
                        overlay={popoverHoverFocus}>
                        <Button onClick={this.handleShowFollow} className='hideFollowBtn'> show </Button>
                    </OverlayTrigger>
                </div></div>
        );

    }
    render() {
        return (
            <div className='container-fluid' style={{ marginBottom: '1%'}}>
                
                <div id="spacer" className="row spacerRow"></div>
                
                <div className='row font3'><strong>TITLE OF BOOK </strong><span> by </span>" <a style={{color: 'rgb(23,50,70)'}} href='/viewprofile'>AUTHOR</a> "</div>
                <div className='row flipPageRow'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <FlipPage flipOnTouch='true' loopForever='true' height='720' width='1280' orientation='horizontal' uncutPages='true' maxAngle='65' animationDuration='450' fluid='true'>
                            <article>
                                <img className="img-responsive" src={require("../img/rihannaPage0.jpg")}/>
                            </article>
                            <article>
                                <div className="container">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <h1 className='font3'>Chapter 1</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <p />
                                                    <p />
                                                    <p />
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </p>
                                                    <p>
                                                        Consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat.
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                      
                                                    </p>
                                                </div>
                                                <div className='row'>
                                                    <div className="col-sm-4 col-md-8 col-lg-12">
                                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0RyInjfgNc4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </article>
                            
                            <article>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6'> {/* pageLeft */}
                                        <div className='row'>
                                            <img className="img-responsive" src={require("../img/rihannaPage0.jpg")} />
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                                Consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6'> {/* pageRight */}
                                        <div className='row' style={{height: '368px'}}>
                                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                                Consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <img className="img-responsive" src={require("../img/rihannaPage0.jpg")} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6'> {/* pageLeft */}
                                        <div className='row' style={{ height: '368px' }}>
                                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                                Consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                                Consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6'> {/* pageRight */}
                                        <div className='row' style={{ height: '368px' }}>
                                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                                Consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <img className="img-responsive" src={require("../img/rihannaPage0.jpg")} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6'> {/* pageLeft */}
                                        <div className='row'>
                                            <img className="img-responsive" src={require("../img/rihannaPage0.jpg")} />
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                                Consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6'> {/* pageRight */}
                                        <div className='row'>
                                            
                                                <img className="img-responsive" src={require("../img/rihannaPage0.jpg")} />
                                            </div>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                                Consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                                         
                        </FlipPage>
                    </div>

                </div>
                <div className='row pageBtnRow'>
                    <div className="col-sm-3 col-md-3 col-lg-3"><span className='glyphicon glyphicon-chevron-left pageBtn pageBtnLeft' /></div>
                    <div className="col-sm-3 col-md-3 col-lg-3"><Button className='pageBtnSave'>Save to Bookshelf</Button></div>
                    <div className="col-sm-3 col-md-3 col-lg-3"><button className='createFbBtn'>Share on facebook</button></div>
                    <div className="col-sm-3 col-md-3 col-lg-3"><span className='glyphicon glyphicon-chevron-right pageBtn pageBtnRight' /></div>
                 </div>
                <div className='container-fluid'>
                    <div className='row socialBtnRow'>
                        {this.renderFollow()}
                    </div></div>
                {/* <ReadBookShelf /> */}
                <BookShelfNew />
            </div>
        );
    }
}

export default Book7;