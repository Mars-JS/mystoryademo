import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

class BookShelfTech extends Component {
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
            <div>
                <div className="container-fluid" >
                    <div className="row" style={{ marginTop: '1%' }}>

                        <div className="container">
                            <div className="row titleRow"><a href='/viewprofile' className='viewAll'>View all ></a>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="font3 shelfTitle">Tech Stories</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} >
                                    <Carousel.Item>
                                        <div className="container-fluid">
                                            <div className="row centerThis">
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div className='containerBook'>
                                                        <img alt="" className="shelfBook2 img-responsive" src={require("../../img/newstory1.png")} />
                                                        <Link to="/books/7">
                                                            <div className='overlay'>
                                                                <div className="bookTitle">book Title</div>
                                                                <div className="bookViews"><span className='glyphicon glyphicon-sunglasses' /> 2,222</div>
                                                                <div className="bookLikes"><span className='glyphicon glyphicon-heart' /> 2,222</div>
                                                                <div className="bookComments"><span className='glyphicon glyphicon-comment' /> 2,222</div>
                                                                <div className="bookRating"><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' />
                                                                    <span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star-empty' /></div>
                                                                <div className="bookAuthor">book Author</div>
                                                            </div></Link>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div className='containerBook'>
                                                        <img alt="" className="shelfBook2 img-responsive" src={require("../../img/popstory1.jpg")} />
                                                        <Link to="/books/7">
                                                            <div className='overlay'>
                                                                <div className="bookTitle">book Title</div>
                                                                <div className="bookViews"><span className='glyphicon glyphicon-sunglasses' /> 3,333</div>
                                                                <div className="bookLikes"><span className='glyphicon glyphicon-heart' /> 3,333</div>
                                                                <div className="bookComments"><span className='glyphicon glyphicon-comment' /> 3,333</div>
                                                                <div className="bookRating"><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' />
                                                                    <span className='glyphicon glyphicon-star-empty' /><span className='glyphicon glyphicon-star-empty' /></div>
                                                                <div className="bookAuthor">book Author</div>
                                                            </div></Link>

                                                    </div>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div className='containerBook'>
                                                        <img alt="" className="shelfBook2 img-responsive" src={require("../../img/book2.jpg")} />
                                                        <Link to="/books/7">
                                                            <div className='overlay'>
                                                                <div className="bookTitle">book Title</div>
                                                                <div className="bookViews"><span className='glyphicon glyphicon-sunglasses' /> 1,111</div>
                                                                <div className="bookLikes"><span className='glyphicon glyphicon-heart' /> 1,111</div>
                                                                <div className="bookComments"><span className='glyphicon glyphicon-comment' /> 1,111</div>
                                                                <div className="bookRating"><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' />
                                                                    <span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star-empty' /></div>
                                                                <div className="bookAuthor">book Author</div>
                                                            </div></Link>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div className='containerBook'>
                                                        <img alt="" className="shelfBook2 img-responsive" src={require("../../img/amazon.jpg")} />
                                                        <Link to="/books/7">
                                                            <div className='overlay'>
                                                                <div className="bookTitle">book Title</div>
                                                                <div className="bookViews"><span className='glyphicon glyphicon-sunglasses' /> 1,111</div>
                                                                <div className="bookLikes"><span className='glyphicon glyphicon-heart' /> 1,111</div>
                                                                <div className="bookComments"><span className='glyphicon glyphicon-comment' /> 1,111</div>
                                                                <div className="bookRating"><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' />
                                                                    <span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star-empty' /></div>
                                                                <div className="bookAuthor">book Author</div>
                                                            </div></Link>
                                                    </div>
                                                </div>
                                            </div></div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="container-fluid">
                                            <div className="row centerThis">
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div className='containerBook'>
                                                        <img alt="" className="shelfBook2 img-responsive" src={require("../../img/popstory3.jpg")} />
                                                        <Link to="/books/7">
                                                            <div className='overlay'>
                                                                <div className="bookTitle">book Title</div>
                                                                <div className="bookViews"><span className='glyphicon glyphicon-sunglasses' /> 2,222</div>
                                                                <div className="bookLikes"><span className='glyphicon glyphicon-heart' /> 2,222</div>
                                                                <div className="bookComments"><span className='glyphicon glyphicon-comment' /> 2,222</div>
                                                                <div className="bookRating"><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' />
                                                                    <span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star-empty' /></div>
                                                                <div className="bookAuthor">book Author</div>
                                                            </div></Link>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div className='containerBook'>
                                                        <img alt="" className="shelfBook2 img-responsive" src={require("../../img/newstory2.png")} />
                                                        <Link to="/books/7">
                                                            <div className='overlay'>
                                                                <div className="bookTitle">book Title</div>
                                                                <div className="bookViews"><span className='glyphicon glyphicon-sunglasses' /> 3,333</div>
                                                                <div className="bookLikes"><span className='glyphicon glyphicon-heart' /> 3,333</div>
                                                                <div className="bookComments"><span className='glyphicon glyphicon-comment' /> 3,333</div>
                                                                <div className="bookRating"><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' />
                                                                    <span className='glyphicon glyphicon-star-empty' /><span className='glyphicon glyphicon-star-empty' /></div>
                                                                <div className="bookAuthor">book Author</div>
                                                            </div></Link>

                                                    </div>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div className='containerBook'>
                                                        <img alt="" className="shelfBook2 img-responsive" src={require("../../img/newstory3.jpg")} />
                                                        <Link to="/books/7">
                                                            <div className='overlay'>
                                                                <div className="bookTitle">book Title</div>
                                                                <div className="bookViews"><span className='glyphicon glyphicon-sunglasses' /> 1,111</div>
                                                                <div className="bookLikes"><span className='glyphicon glyphicon-heart' /> 1,111</div>
                                                                <div className="bookComments"><span className='glyphicon glyphicon-comment' /> 1,111</div>
                                                                <div className="bookRating"><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' />
                                                                    <span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star-empty' /></div>
                                                                <div className="bookAuthor">book Author</div>
                                                            </div></Link>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div className='containerBook'>
                                                        <img alt="" className="shelfBook2 img-responsive" src={require("../../img/popstory4.jpg")} />
                                                        <Link to="/books/7">
                                                            <div className='overlay'>
                                                                <div className="bookTitle">book Title</div>
                                                                <div className="bookViews"><span className='glyphicon glyphicon-sunglasses' /> 1,111</div>
                                                                <div className="bookLikes"><span className='glyphicon glyphicon-heart' /> 1,111</div>
                                                                <div className="bookComments"><span className='glyphicon glyphicon-comment' /> 1,111</div>
                                                                <div className="bookRating"><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' />
                                                                    <span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star-empty' /></div>
                                                                <div className="bookAuthor">book Author</div>
                                                            </div></Link>
                                                    </div>
                                                </div>
                                            </div></div>
                                    </Carousel.Item>


                                </Carousel>
                            </div>
                        </div>

                    </div></div></div>

        );
    }
}

export default BookShelfTech;