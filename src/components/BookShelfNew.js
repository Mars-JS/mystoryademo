import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { Carousel } from "react-bootstrap";
import "../App.css";

class BookShelfNew extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h3 className="text-center">New Stories</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Carousel width='100%' height=''>
                                <Carousel.Item style={{ backgroundImage: 'url("img/cross.png")'}}>

                                </Carousel.Item>
                                <Carousel.Item>

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
