import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { Carousel } from "react-bootstrap";
import "../App.css";

class BookShelfControl extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    /* alert(`selected=${selectedIndex}, direction=${e.direction}`); */
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
            <div className="container-fluid" >
                <div className="row">

                    <div className="container-fluid">
                    <div className="row darkBlueST">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h3 className="centerDiv font2"><strong>New Stories</strong></h3>
                        </div>
                    </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} >
                                <Carousel.Item>
                                    <div className="container">
                                        <div className="row" style={{marginLeft: '2%'}}>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/celebstory3.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/celebstory1.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/food2.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/amazon.jpg")} /></Link></div>         
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="container">
                                    <div className="row" style={{marginLeft: '2%'}}>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/music3.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/celebstory2.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/newstory2.png")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/popstory4.jpg")} /></Link></div>         
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="container">
                                    <div className="row" style={{marginLeft: '2%'}}>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/ririBazar.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/tech2.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/travel3.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/ps4.jpg")} /></Link></div>         
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="container">
                                    <div className="row" style={{marginLeft: '2%'}}>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/tech1.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/tech3.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/proj2.jpg")} /></Link></div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><Link to="/books/1"><img alt="" className="shelfBook2 img-responsive" src={require("../img/apple.jpg")} /></Link></div>         
                                    </div></div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

    );
  }
}

export default BookShelfControl;
