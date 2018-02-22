import React, { Component } from "react";
import { render } from "react-dom";
import "../App.css";
import { Carousel } from "react-bootstrap";
import ReadBookShelf from './ReadBookShelf';

class Book2 extends Component {
    render() {
        return (
            <div className='container'>
                <div className="container-fluid center-block" style={{ marginTop: '10%', marginBottom: '10%' }}>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h1><strong>Title: </strong>My Life in 2018</h1>
                            <h1><strong>Author: </strong>Rihanna</h1>
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <Carousel className="carousel" style={{ height: "720px", width: "1280px", marginTop: '2%', marginBottom: '2%' }} interval="15000">
                                <Carousel.Item id="coverPage">
                                    <img
                                        className="img-responsive"
                                        src={require("../img/rihannaPage0.jpg")}
                                    />
                                </Carousel.Item>
                                <Carousel.Item style={{ margin: '2%' }}>
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <h1>Chapter 1</h1>
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
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                                                </div>
                                                <div className='row'>
                                                    <div className="col-sm-4 col-md-8 col-lg-12">
                                                        <iframe id="videoPlayer" width="480px" height="272px" src="https://www.youtube.com/embed/0RyInjfgNc4" className="center-block" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item style={{ margin: '2%' }}>
                                    <div className="container">
                                        <div className="container-fluild">
                                            <div className="row">

                                                <div className="col-sm-6 col-md-6 col-lg-6">
                                                    <p>
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
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
                                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                                                    <div className="container">
                                                        <div className='row'>
                                                            <div className='col-sm-5 col-md-8 col-lg-12'>
                                                                <img
                                                                    className="img-responsive img-rounded"
                                                                    src={require("../img/rihannaPage3.jpg")}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-6 col-lg-6">
                                                    <div className="container">
                                                        <div className='row' style={{ marginBottom: '12px' }}>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <img className="img-responsive img-rounded" src={require("../img/rihannaPageParis.jpg")} />
                                                            </div>
                                                            <div className='col-sm-3 col-md-3 col-lg-3 float-left'>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet,
                                                                    consectetur adipiscing elit,
                                                                    sed do eiusmod tempor incididunt
                                                                    ut labore et dolore magna aliqua.
                                  </p>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item style={{ margin: '2%' }}>
                                    <div className="container">
                                        <div className="container-fluild">
                                            <div className="row">

                                                <div className="col-sm-6 col-md-6 col-lg-6">
                                                    <div className="container">
                                                        <div className='row'>
                                                            <div className='col-sm-4 col-md-6 col-lg-8'>
                                                                <img className="img-responsive img-rounded" src={require("../img/rihannaPageBridge.jpg")} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat.
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
                                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                                                </div>

                                                <div className="col-sm-6 col-md-6 col-lg-6">
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
                                                    <div className="container">
                                                        <div className='row'>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <img
                                                                    className="img-responsive img-rounded"
                                                                    src={require("../img/rihannaPageDiamond.jpg")}
                                                                />
                                                            </div>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <img
                                                                    className="img-responsive img-rounded"
                                                                    src={require("../img/rihannaVogue.jpg")}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item style={{ margin: '2%' }}>
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <h1>Chapter 2</h1>
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
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                                            </div>

                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item style={{ margin: '2%' }}>
                                    <div className="container">
                                        <div className="container-fluild">
                                            <div className="row">

                                                <div className="col-sm-6 col-md-6 col-lg-6">
                                                    <div className='row'>
                                                        <div className='col-sm-4 col-md-4 col-lg-4'>
                                                        </div>
                                                        <div className='col-sm-4 col-md-4 col-lg-4'>
                                                            <img className="img-responsive img-rounded" src={require("../img/rihannaPage4.jpg")} />
                                                        </div>
                                                        <div className='col-sm-4 col-md-4 col-lg-4'>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
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
                                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-6 col-lg-6">
                                                    <div className="container">
                                                        <div className='row'>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <img
                                                                    className="img-responsive img-rounded"
                                                                    src={require("../img/rihannaPage5.jpg")}
                                                                    style={{ width: '80%', height: '80%' }}
                                                                />
                                                            </div>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <img
                                                                    className="img-responsive img-rounded"
                                                                    src={require("../img/rihannaPage6.jpg")}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <p>
                                                                    Nulla pariatur duis aute irure dolor
                                                                    in reprehenderit in voluptate velit
                                                                    esse cillum dolore eu fugiat.
                                </p>
                                                            </div>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <p>
                                                                    Duis aute irure dolor
                                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                                    nulla pariatur.
                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
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
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item style={{ margin: '2%' }}>
                                    <div className="container">
                                        <div className="container-fluild">
                                            <div className="row">

                                                <div className="col-sm-6 col-md-6 col-lg-6">
                                                    <img
                                                        className="img-responsive img-rounded"
                                                        src={require("../img/rihannaPageGrammy.jpg")}
                                                        style={{ width: '80%', height: '80%' }}
                                                    />
                                                </div>

                                                <div className="col-sm-6 col-md-6 col-lg-6">
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
                                                    <div className="container">
                                                        <div className='row'>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <img
                                                                    className="img-responsive img-rounded"
                                                                    src={require("../img/rihannaPageDiamond.jpg")}
                                                                />
                                                            </div>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <img
                                                                    className="img-responsive img-rounded"
                                                                    src={require("../img/rihannaVogue.jpg")}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <ReadBookShelf />
            </div>
        );
    }
}

export default Book2;