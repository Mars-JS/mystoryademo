import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import "../App.css";

class BookShelfTemp extends Component {
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
                <div className="row" style={{ marginTop: '1%' }}>

                    <div className="container">
                        <div className="row titleRow">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="font3 shelfTitle">Popular Stories</div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} >
                                <Carousel.Item>
                                    <div className="container">
                                        <div className="row" style={{ marginLeft: '2%' }}>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className='containerBook'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("../img/bookProgress.png")} />
                                                    <div className='overlay'>
                                                        <div className="bookTitle">book Title</div>
                                                        <div className="bookAuthor">book Author</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className='containerBook'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("../img/bookProgress.png")} />
                                                    <div className='overlay'>
                                                        <div className="bookTitle">book Title</div>
                                                        <div className="bookAuthor">book Author</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className='containerBook'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("../img/bookProgress.png")} />
                                                    <div className='overlay'>
                                                        <div className="bookTitle">book Title</div>
                                                        <div className="bookAuthor">book Author</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="container">
                                        <div className="row" style={{ marginLeft: '2%' }}>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className='containerBook'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("../img/bookProgress.png")} />
                                                    <div className='overlay'>
                                                        <div className="bookTitle">book Title</div>
                                                        <div className="bookAuthor">book Author</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className='containerBook'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("../img/bookProgress.png")} />
                                                    <div className='overlay'>
                                                        <div className="bookTitle">book Title</div>
                                                        <div className="bookAuthor">book Author</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className='containerBook'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("../img/bookProgress.png")} />
                                                    <div className='overlay'>
                                                        <div className="bookTitle">book Title</div>
                                                        <div className="bookAuthor">book Author</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="container">
                                        <div className="row" style={{ marginLeft: '2%' }}>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className='containerBook'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("../img/bookProgress.png")} />
                                                    <div className='overlay'>
                                                        <div className="bookTitle">book Title</div>
                                                        <div className="bookAuthor">book Author</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className='containerBook'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("../img/bookProgress.png")} />
                                                    <div className='overlay'>
                                                        <div className="bookTitle">book Title</div>
                                                        <div className="bookAuthor">book Author</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className='containerBook'>
                                                    <img alt="" className="shelfBook2 img-responsive" src={require("../img/bookProgress.png")} />
                                                    <div className='overlay'>
                                                        <div className="bookTitle">book Title</div>
                                                        <div className="bookAuthor">book Author</div>
                                                    </div>
                                                </div>
                                            </div>
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

export default BookShelfTemp;