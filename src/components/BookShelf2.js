import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { Carousel } from "react-bootstrap";
import "../App.css";

class BookShelf2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Carousel>
                            <Carousel.Item>

                            </Carousel.Item>
                            <Carousel.Item>

                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf2;
