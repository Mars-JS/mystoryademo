import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {

    render() {
        return (
            <div>
                <div className="row" >
                    <div className="jumbotron">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="jumboImg img-responsive" src={require('../img/mysLogo00.png')} alt="logo0" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="jumboImg2 col-sm-12 col-md-12 col-lg-12">

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div id="row1" className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="img-responsive" src={require('../img/mystYolo.png')} alt='logo2' />
                                </div>
                            </div>

                            <form className="formPad">

                                <fieldset>
                                    <div id="row10" className="row">
                                        <div className="col-sm-9 col-md-9 col-lg-9">
                                            
                                                <div className="fixed-action-button">
                                                    <Link to="/profile" className="btn-floating btn-large">
                                                        <button className="loginBtn loginBtn--facebook">Login with Facebook</button>
                                                    </Link>
                                                </div>

                                        </div>
                                    </div>
                                </fieldset>
                            </form>

                        </div>

                    </div>
                </div>

                <div id="rowSearch" className="row">
                    <div className="searchDiv col-sm-12 col-md-12 col-lg-12">
                        <div id="searchBox" className="searchBoxClass form-group has-feedback">
                            <input type="text" className="form-control text-center" placeholder="Search MyStorya" />
                            <i className="glyphicon glyphicon-search form-control-feedback"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
