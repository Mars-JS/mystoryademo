import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (<div className='container-fluid' style={{ height: '225px', background: 'transparent' }}>

            <div className='container-fluid'>
                <div className="row font7" style={{ marginTop: '1%', marginBottom: '1%'}}>
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>
                    <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
                        <span className='cursorPointer centerContents'>
                            <a href='/'><lang className='lang'>English(US)</lang></a>
                            <a href='/'><lang className='lang'>Español </lang></a>
                            <a href='/'><lang className='lang'>Português(Brasil) </lang></a>
                            <a href='/'><lang className='lang'>Français(France) </lang></a>
                            <a href='/'><lang className='lang'>Deutsch </lang></a>
                            <a href='/'><lang className='lang'>Italiano </lang></a>
                            <a href='/'><lang className='lang'>עִברִית</lang></a>
                            <a href='/'><lang className='lang'>אֲרָמִית</lang></a>
                            <a href='/'><lang className='lang'>普通话 </lang></a>
                            <a href='/'><lang className='lang'>日本語 </lang></a>
                        </span>
                    </div>
                    
                    </div></div>

            <div className='container-fluid' >

                <div className='row' style={{ borderTop: '3px solid darkgrey', marginBottom: '1%' }} >

                    <div id='1A' className="row font7" style={{ marginTop: '1%' }}>
                        <div id='col1A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2 centerContents'><span className='cursorPointer'>Privacy</span>
                        </div>
                        <div id='col1A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2 centerContents'><span className='cursorPointer'>Terms</span>
                        </div>
                        <div id='col1A' className='col-xs-1 col-sm-1 col-md-1 col-lg-1 centerContents'>
                        </div>
                        <div id='col1A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2 centerContents'><span className='cursorPointer'>About Us</span>
                        </div>
                        <div id='col1A' className='col-xs-1 col-sm-1 col-md-1 col-lg-1 centerContents'>
                        </div>
                        <div id='col1A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2 centerContents'><span className='cursorPointer'>Careers</span>
                        </div>
                        <div id='col1A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2 centerContents'><span className='cursorPointer'>Langauges</span>
                        </div>
                    </div>
                    <div id='2A' className="row" style={{ marginTop: '10px' }}>
                        <div id='col2A' className='col-xs-12 col-sm-12 col-md-12 col-lg-12 centerContents'>
                            <img alt="" className="footerLogoBlue" src={require("../../img/logoBlackFooter.png")} />
                        </div></div>
                    <div id='3A' className="row font7 centerContents">
                            <span className='copyrightText'><img alt='' className="copyright img-responsive" src={require("../../img/copyright.png")}/>2018 MYSTORYA</span>
                        </div>
                    

                </div>
                
            </div>

        </div>)
    };
}
export default Footer;


       /*  <div className="container-fluid footer">
            <div className="row" style={{marginTop: '1%'}}>

                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <a href='/'><img alt="" className="footerLogo img-responsive" src={require("../../img/mysLogo00.png")} /></a>
                </div>

                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    <div className='row' style={{marginLeft: '55%'}}>  
                    </div>
                    <div className='row' style={{marginLeft: '55%', marginTop: '5%'}}>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                            <a><img alt="" className="socialIcons" src={require("../../img/insta2.png")} /></a>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                            <a><img alt=""  className="socialIcons" src={require("../../img/facebook2.png")} /></a>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div> */