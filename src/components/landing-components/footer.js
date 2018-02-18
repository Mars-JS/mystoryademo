import React from 'react';
import '../Footer.css'
const footer = () => (

    <footer className="footer">
        <div className="container-fluid">

            <div className="row">

                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 footer-logo">
                    <a href='/' className='pull-left'><img className="img-responsive" id="footerlogo" src={require("../../img/mysLogo00.png")} /></a>
                </div>

                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1  company-info">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 company-info-title">
                            <h4>MyStorya Inc.</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            Palo Alto, Ca
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            hello@mystorya.com
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            www.mystorya.com
                        </div>
                    </div>
                </div>

                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5  social-icons ">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-offset-9 col-sm-offset-9 col-md-offset-9 col-lg-offset-9">
                        <a><img id="github" className="img-responsive" src={require("../../img/github.png")} /></a>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
                        <a href="https://www.linkedin.com/in/pat-hustad-56277b36/"><img className="img-responsive" id="linkedin" src={require("../../img/linkedin.png")} /></a>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
                        <a><img className="img-responsive" id="stack" src={require("../../img/stack.png")} /></a>
                    </div>
                </div>

            </div>
        </div>
    </footer>
);
export default footer;
