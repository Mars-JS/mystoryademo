import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BookShelf extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
                <h3 className="shelfTitle text-center">NEW STORIES </h3>
                <div id="latestStories" className="row shelf">
                    <div className="container" style={{paddingBottom: "17px"}}>
                        <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">
                                        <img className="bookImage" src={require("../img/newstory1.png")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/read">
                                <div className="books">
                                    <div className="book">
                                        <img className="bookImage" src={require("../img/popstory1.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestThree" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/read">
                                <div className="books">
                                    <div className="book">
                                        <img className="bookImage" src={require("../img/book2.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestFour" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/read">
                                <div className="books">
                                    <div className="book">
                                        <img className="bookImage" src={require("../img/amazon.jpg")} />
                                        <div className="overlay">
                                            <div className="text">SHOP NOW</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <button id="userRightScroll" className="btn btn-info rightScroll"><span className="glyphicon glyphicon-chevron-right pull-right"></span></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BookShelf;
