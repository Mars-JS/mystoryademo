import React, { Component } from "react";
import { render } from "react-dom";
import "../App.css";
import { Carousel } from "react-bootstrap";
import ReadBookShelf from './ReadBookShelf';
import Nav from './Header';
import Search from './landing/Search';

class Book1 extends Component {
  render() {
    return (

      <div className='container-fluid'>
        <div className="container-fluid center-block" style={{ marginTop: '10%', marginBottom: '10%', marginLeft: '10%' }}>
          <Nav/>
          <div className="row" >
            <div className="col-sm-12 col-md-12 col-lg-12">
              <Carousel className="carousel" style={{ height: "480px", width: "854px", marginTop: '8%', marginBottom: '2%',marginLeft: '11%' }} interval="15000">
                <Carousel.Item id="coverPage">
                  <img
                    className="img-responsive"
                    src={require("../img/rihannaPage0.jpg")}
                  />
                </Carousel.Item>
                <Carousel.Item style={{ margin: '2%' }}>
                  <div className="container">
                    <div className="row">

                      <div className="col-sm- col-md-4 col-lg-4">
                        <h1>Chapter 1</h1>

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

                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="row">
                          <p />
                          <p />
                          <p />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit,

                      </p>

                        </div>
                        <div className='row'>
                          <div className="col-sm-4 col-md-8 col-lg-12">
                            <iframe id="videoPlayer" width="400px" height="272px" src="https://www.youtube.com/embed/0RyInjfgNc4" className="center-block" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item style={{ margin: '2%' }}>
                <div className="container">
                    <div className="row">

                      <div className="col-sm- col-md-4 col-lg-4">
                        <h1>Chapter 1</h1>

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

                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="row">
                          <p />
                          <p />
                          <p />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit,

                      </p>

                        </div>
                        <div className='row'>
                          <div className="col-sm-4 col-md-8 col-lg-12">
                            <iframe id="videoPlayer" width="400px" height="272px" src="https://www.youtube.com/embed/0RyInjfgNc4" className="center-block" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item style={{ margin: '2%' }}>
                <div className="container">
                    <div className="row">

                      <div className="col-sm- col-md-4 col-lg-4">
                        <h1>Chapter 1</h1>

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

                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="row">
                          <p />
                          <p />
                          <p />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit,

                      </p>

                        </div>
                        <div className='row'>
                          <div className="col-sm-4 col-md-8 col-lg-12">
                            <iframe id="videoPlayer" width="400px" height="272px" src="https://www.youtube.com/embed/0RyInjfgNc4" className="center-block" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item style={{ margin: '2%' }}>
                <div className="container">
                    <div className="row">

                      <div className="col-sm- col-md-4 col-lg-4">
                        <h1>Chapter 1</h1>

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

                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="row">
                          <p />
                          <p />
                          <p />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit,

                      </p>

                        </div>
                        <div className='row'>
                          <div className="col-sm-4 col-md-8 col-lg-12">
                            <iframe id="videoPlayer" width="400px" height="272px" src="https://www.youtube.com/embed/0RyInjfgNc4" className="center-block" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item style={{ margin: '2%' }}>
                <div className="container">
                    <div className="row">

                      <div className="col-sm- col-md-4 col-lg-4">
                        <h1>Chapter 1</h1>

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

                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="row">
                          <p />
                          <p />
                          <p />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit,

                      </p>

                        </div>
                        <div className='row'>
                          <div className="col-sm-4 col-md-8 col-lg-12">
                            <iframe id="videoPlayer" width="400px" height="272px" src="https://www.youtube.com/embed/0RyInjfgNc4" className="center-block" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </Carousel.Item>
                <Carousel.Item style={{ margin: '2%' }}>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="row">
        <Search/>
        </div>
        <ReadBookShelf/>
      </div>
    );
  }
}

export default Book1;
