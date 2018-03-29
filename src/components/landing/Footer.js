import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(<div className='container-fluid' style={{borderTop: '3px solid darkgrey', height: '175px', background: 'transparent'}}>
            <div className='row'>

            <div id='1A' className="row font7" style={{marginLeft: '8%', marginTop: '1%'}}>
                <div id='col1A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2'><span className='cursorPointer'>Privacy</span>
                </div>
                <div id='col1A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2'><span className='cursorPointer'>Terms</span>
                </div>
                <div id='col1A' className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                </div>
                <div id='col1A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2'><span className='cursorPointer'>About Us</span>
                </div>
                <div id='col1A' className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                </div>
                <div id='col1A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2'><span className='cursorPointer'>Careers</span>
                </div>
                <div id='col1A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2'><span className='cursorPointer'>Langauges</span>
                </div>
                </div>
            <div id='2A' className="row" style={{marginTop: '10px'}}>
                <div id='col2A' className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <img alt="" className="footerLogoBlue" src={require("../../img/logoBlueFooter.png")} />
                </div></div>
            <div id='3A' className="row font7" style={{marginTop: '10px'}}>
                <div id='col3A' className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
                <div id='col3A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                <img alt='' className="copyright img-responsive" src={require("../../img/copyright.png")} />
                </div>
                <div id='col3A' className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                <span className='copyrightText'>2018 MYSTORYA</span>
                </div>
                <div id='col3A' className='col-xs-5 col-sm-5 col-md-5 col-lg-5'></div>
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