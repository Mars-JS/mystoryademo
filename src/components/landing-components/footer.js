import React from 'react';
import '../Footer.css'
const footer = () => (

<footer class="footer">
        <div class="container-fluid">
            <div class = "row">
                <div class = "col-xs-1 footer-logo">
                    <a href='/' class='pull-left'><img id="footerlogo" src={require("../../img/mysLogo00.png")}/></a>
                </div>
                <div class = "col-xs-3 col-xs-offset-1  company-info">
                    <div class = "row">
                        <div class = "col-xs-12 company-info-title">
                            <h4>MyStorya Inc.</h4>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-xs-12">
                            Palo Alto, Ca
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-xs-12">
                            hello@mystorya.com
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-xs-12">
                            www.mystorya.com
                        </div>
                    </div>
                </div>
                <div class = "col-xs-5  social-icons ">
                    <div class = "col-xs-1 col-xs-offset-9">
                        <a><img id="github" src={require("../../img/github.png")}/></a>
                    </div>
                    <div class = "col-xs-1 ">
                          <a href="https://www.linkedin.com/in/pat-hustad-56277b36/"><img id="linkedin" src={require("../../img/linkedin.png")}/></a>
                    </div>
                    <div class = "col-xs-1 ">
                        <a><img id="stack" src={require("../../img/stack.png")}/></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
export default footer;
