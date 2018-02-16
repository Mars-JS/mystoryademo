import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top navigation">
                    <div id="1A" className="row" style={{ backgroundColor: "white" }}>
                        <div id="headerContainer" className="container">

                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div className='navbar-header brand-name'>
                                    <a href='./'><img src={require("../img/logoM2.png")} /> </a>
                                    <a href='./'><img src={require("../img/mystolo.png")} /> </a>
                                </div>
                            </div>

                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div id="searchBox" className="form-group has-feedback">
                                    <input type="text" className="form-control text-center" placeholder="Search MyStorya" />
                                    <i className="glyphicon glyphicon-search form-control-feedback"></i>
                                </div>
                            </div>

                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#"><span className="glyphicon glyphicon-align-justify"></span></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>

                <div className="row">
                    <div className="headerLogo col-sm-4 col-md-4 col-lg-4 header-space"></div>
                    <a href='./'><img src={require("../img/logoM2.png")} /></a>
                </div>
            </div>
        )
    }
}

export default Header;
