import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BookShelf extends Component {
    render() {
        return (
          <div className="container" >
            <div className="row">
                <h3 className="shelfTitle text-center">New Stories</h3>
                <div id="latestStories" className="row shelf">
                    <div className="container" style={{paddingBottom: "17px"}}>
                        <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                            <Link to="/books/7" className="">
                                <div className="books">
                                    <div className="book">

                                        <img alt=""  className="bookImage img-responsive" src={require("../img/book2.jpg")} />
                                            <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <Link to="/books/7" className="">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/popstory1.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestThree" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <Link to="/test" className="">
                                <div className="books">
                                    <div className="book">
                                            <img alt=""  className="bookImage img-responsive" src={require("../img/newstory1.png")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestFour" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/amazon.jpg")} />
                                        <div className="overlay">
                                            <div className="text">SHOP NOW</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <button id="userRightScroll" className="btn btn-info rightScroll"><span className="glyphicon glyphicon-chevron-right pull-right"></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className="shelfTitle text-center">Popular Stories</h3>
                <div id="latestStories" className="row shelf">
                    <div className="container" style={{paddingBottom: "17px"}}>
                        <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">

                                        <img alt=""  className="bookImage img-responsive" src={require("../img/popstory3.jpg")} />
                                            <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/newstory2.png")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestThree" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/newstory3.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestFour" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/popstory4.jpg")} />
                                        <div className="overlay">
                                            <div className="text">SHOP NOW</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <button id="userRightScroll" className="btn btn-info rightScroll"><span className="glyphicon glyphicon-chevron-right pull-right"></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className="shelfTitle text-center">TRENDING STORIES </h3>
                <div id="latestStories" className="row shelf">
                    <div className="container" style={{paddingBottom: "17px"}}>
                        <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">

                                        <img alt=""  className="bookImage img-responsive" src={require("../img/celebstory2.jpg")} />
                                            <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/celebstory3.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestThree" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/riridrake.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestFour" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/celebstory4.jpg")} />
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
            <div className="row">
                <h3 className="shelfTitle text-center">CELEBRITY STORIES </h3>
                <div id="latestStories" className="row shelf">
                    <div className="container" style={{paddingBottom: "17px"}}>
                        <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">

                                        <img alt=""  className="bookImage img-responsive" src={require("../img/celebstory1.jpg")} />
                                            <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/celeb1z.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestThree" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/celeb2z.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestFour" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/newstory4.jpg")} />
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
            <div className="row">
                <h3 className="shelfTitle text-center">COLLEGE STORIES </h3>
                <div id="latestStories" className="row shelf">
                    <div className="container" style={{paddingBottom: "17px"}}>
                        <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">

                                        <img alt=""  className="bookImage img-responsive" src={require("../img/college1.jpg")} />
                                            <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/college2.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestThree" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/college3.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestFour" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/bbuy.jpg")} />
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
            <div className="row">
                <h3 className="shelfTitle text-center">MUSIC STORIES </h3>
                <div id="latestStories" className="row shelf">
                    <div className="container" style={{paddingBottom: "17px"}}>
                        <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">

                                        <img alt=""  className="bookImage img-responsive" src={require("../img/music1.jpg")} />
                                            <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/music2.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestThree" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/music3.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestFour" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/itunes.jpg")} />
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
            <div className="row">
                <h3 className="shelfTitle text-center">TECH STORIES </h3>
                <div id="latestStories" className="row shelf">
                    <div className="container" style={{paddingBottom: "17px"}}>
                        <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">

                                        <img alt=""  className="bookImage img-responsive" src={require("../img/tech1.jpg")} />
                                            <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/tech2.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestThree" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/tech3.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestFour" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/apple.jpg")} />
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
            <div className="row">
                <h3 className="shelfTitle text-center">FOOD STORIES </h3>
                <div id="latestStories" className="row shelf">
                    <div className="container" style={{paddingBottom: "17px"}}>
                        <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">

                                        <img alt=""  className="bookImage img-responsive" src={require("../img/food1.jpg")} />
                                            <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/food2.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestThree" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/food3.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestFour" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/hello.jpg")} />
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
            <div className="row">
                <h3 className="shelfTitle text-center">GAMING STORIES </h3>
                <div id="latestStories" className="row shelf">
                    <div className="container" style={{paddingBottom: "17px"}}>
                        <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                            <Link to="/books/1" className="">
                                <div className="books">
                                    <div className="book">

                                        <img alt=""  className="bookImage img-responsive" src={require("../img/game1.jpg")} />
                                            <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/game2.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestThree" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/game3.jpg")} />
                                        <div className="overlay">
                                            <div className="text">Open Story</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="latestFour" className="col-sm-3 col-md-3 col-lg-3 text-center">
                            <a href="/">
                                <div className="books">
                                    <div className="book">
                                        <img alt=""  className="bookImage img-responsive" src={require("../img/ps4.jpg")} />
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
