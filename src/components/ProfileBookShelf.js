import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class ProfileBookShelf extends Component {
    render() {
        return (
            <div className="container" >
                <div className="row">
                    <h3 className="shelfTitle text-center">MY STORIES</h3>
                    <div id="latestStories" className="row shelf">
                        <div className="container" style={{ paddingBottom: "17px" }}>
                            <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                                <Link to="/books/1" className="">
                                    <div className="books">
                                        <div className="book">

                                            <img className="bookImage img-responsive" src={require("../img/patPic1.jpg")} />
                                            <div className="overlay">
                                                <div className="text">Open Story</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div id="latestTwo" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <Link to="/books/2" className="">
                                    <div className="books">
                                        <div className="book">
                                            <img className="bookImage img-responsive" src={require("../img/patPic2.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/patPic3.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/patPic4.jpg")} />
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
                    <h3 className="shelfTitle text-center">MY SOCIAL MEDIA</h3>
                    <div id="latestStories" className="row shelf">
                        <div className="container" style={{ paddingBottom: "17px" }}>
                            <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                                <Link to="/books/1" className="">
                                    <div className="books">
                                        <div className="book">

                                            <img className="bookImage img-responsive" src={require("../img/linkedin3.png")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/fbImg.png")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/insta3.png")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/twitter.png")} />
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
                    <h3 className="shelfTitle text-center">MY FAMILY STORIES</h3>
                    <div id="latestStories" className="row shelf">
                        <div className="container" style={{ paddingBottom: "17px" }}>
                            <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                                <Link to="/books/1" className="">
                                    <div className="books">
                                        <div className="book">

                                            <img className="bookImage img-responsive" src={require("../img/fam1.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/fam2.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/fam3.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/fam4.jpg")} />
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
                    <h3 className="shelfTitle text-center">MY FRIENDS STORIES</h3>
                    <div id="latestStories" className="row shelf">
                        <div className="container" style={{ paddingBottom: "17px" }}>
                            <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                                <Link to="/books/1" className="">
                                    <div className="books">
                                        <div className="book">

                                            <img className="bookImage img-responsive" src={require("../img/fren1.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/fren2.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/fren3.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/fren4.jpg")} />
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
                    <h3 className="shelfTitle text-center">CONTINUE READING</h3>
                    <div id="latestStories" className="row shelf">
                        <div className="container" style={{ paddingBottom: "17px" }}>
                            <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                                <Link to="/books/1" className="">
                                    <div className="books">
                                        <div className="book">

                                            <img className="bookImage img-responsive" src={require("../img/newstory1.png")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/newstory2.png")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/newstory3.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/cont4.jpg")} />
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
                    <h3 className="shelfTitle text-center">MY FAVORITE STORIES</h3>
                    <div id="latestStories" className="row shelf">
                        <div className="container" style={{ paddingBottom: "17px" }}>
                            <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                                <Link to="/books/1" className="">
                                    <div className="books">
                                        <div className="book">

                                            <img className="bookImage img-responsive" src={require("../img/music1.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/music2.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/music3.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/itunes.jpg")} />
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
                    <h3 className="shelfTitle text-center">EDUCATION COURSES</h3>
                    <div id="latestStories" className="row shelf">
                        <div className="container" style={{ paddingBottom: "17px" }}>
                            <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                                <Link to="/books/1" className="">
                                    <div className="books">
                                        <div className="book">

                                            <img className="bookImage img-responsive" src={require("../img/ed1.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/ed2.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/ed3.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/ed4.jpg")} />
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
                    <h3 className="shelfTitle text-center">MY SHOPPING MALL</h3>
                    <div id="latestStories" className="row shelf">
                        <div className="container" style={{ paddingBottom: "17px" }}>
                            <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                                <Link to="/books/1" className="">
                                    <div className="books">
                                        <div className="book">

                                            <img className="bookImage img-responsive" src={require("../img/expedia.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/apple.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/bbuy.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/amazon.jpg")} />
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
                    <h3 className="shelfTitle text-center">MY PROJECTS</h3>
                    <div id="latestStories" className="row shelf">
                        <div className="container" style={{ paddingBottom: "17px" }}>
                            <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                                <Link to="/books/1" className="">
                                    <div className="books">
                                        <div className="book">

                                            <img className="bookImage img-responsive" src={require("../img/proj1.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/proj2.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/proj3.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/proj4.jpg")} />
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
                    <h3 className="shelfTitle text-center">RECOMMENDED STORIES</h3>
                    <div id="latestStories" className="row shelf">
                        <div className="container" style={{ paddingBottom: "17px" }}>
                            <div id="latestOne" className="col-sm-3 col-md-3 col-lg-3 text-center">
                                <button id="userLeftScroll" className="btn btn-info leftScroll"><span className="glyphicon glyphicon-chevron-left pull-left"></span></button>
                                <Link to="/books/1" className="">
                                    <div className="books">
                                        <div className="book">

                                            <img className="bookImage img-responsive" src={require("../img/college3.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/celebstory2.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/food2.jpg")} />
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
                                            <img className="bookImage img-responsive" src={require("../img/music2.jpg")} />
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

export default ProfileBookShelf;
