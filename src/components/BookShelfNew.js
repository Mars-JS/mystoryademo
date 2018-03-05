import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { Carousel } from "react-bootstrap";
import "../App.css";

class BookShelfNew extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">

                    <div className="container-fluid">
                    <div className="row" >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{backgroundColor: 'rgb(240, 240, 240)'}} >
                            <h3 className="text-center">New Stories</h3>
                        </div>
                    </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Carousel>
                                <Carousel.Item>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/book2.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/popstory1.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/celebstory1.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/newstory1.png")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/amazon.jpg")} /></div>
                                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/book1.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/popstory2.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/celebstory2.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/popstory3.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/celeb1z.jpg")} /></div>
                                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/rihannaPageBridge.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/unsp7f.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/celebstory3.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/rihannaPageGrammy.jpg")} /></div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img alt="" className="shelfBook img-responsive" src={require("../img/celebstory4.jpg")} /></div>
                                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                                    </div></div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelfNew;
