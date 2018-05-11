import React, { Component } from 'react';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import ViewProfileAllShelf from './ViewProfileAllShelf';

class ViewProfile extends Component {
        constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseSave = this.handleCloseSave.bind(this);
        this.handleChangeDisplayName = this.handleChangeDisplayName.bind(this);
        this.handleChangeAboutMe = this.handleChangeAboutMe.bind(this);

        this.state = {
            show: false,
            valueDisplayName: 'Rihanna',
            valueAboutMe: 'New album dropping soon! Click the link below'
        };
    }
    handleClose() {
        this.setState({ show: false });
        this.setState({ valueDisplayName: 'pat_hustad' })
    }
    handleShow() {
        this.setState({ show: true });
    }
    handleCloseSave() {
        this.setState({ show: false });
        //save to DB
    }
    getValidationStateBody() {
        const length = this.state.valueDisplayName.length;
        if (length > 3) return 'success';
        else if (length > 1) return 'warning';
        else if (length > 0) return 'error';
        else if (length < 10) return 'error';
        return null;
    }
    handleChangeDisplayName(e) {
        this.setState({ valueDisplayName: e.target.value });
    }
    handleChangeAboutMe(e) {
        this.setState({ valueAboutMe: e.target.value });
    }


    render() {

        return (
            <div className='container-fluid'>
                
                <Modal bsSize='md' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='font3'>Follow/Message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container-fluid'>Coming Soon...</div>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button onClick={this.handleClose} className='blueButton' >Close</Button>
                    </Modal.Footer>
                </Modal>
                
                <div id="spacer" className="row spacerRow"></div>
                <div id="1A" className="row" style={{backgroundColor: 'rgb(245, 245, 245)'}}>
                <div id="1x" className="row">
                    <div id="col2A" className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div id="col1A" className="col-sm-4 col-md-4 col-lg-4 " style={{ marginTop: '50px'}} >
                        <div className='row profPic'>
                            <img id="" className="img-responsive" src={require("../img/ririProfile.png")} alt="" />
                        </div>
                    </div>
                    <div id="col2A" className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div id="col2A" className="col-sm-6 col-md-6 col-lg-6">
                    
                        <div id="1B" className="row profBG font8">
                            <div id="col1B" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <br/>
                                <h2>{this.state.valueDisplayName}
                                <Button style={{marginLeft: '15%'}} onClick={this.handleShow} className="outlineButton2">Follow</Button>
                                <Button style={{marginLeft: '1%'}} onClick={this.handleShow} className="outlineButton2">Message</Button>
                                </h2>
                            </div>
                        </div>

                        <div id="2B" className="row profBG font8">
                            <div id="col1B" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span><h4>Professional singer, and songwriter</h4></span>
                        </div></div>

                        <div id="3B" className="row profBG font8">
                            <div id="col1B" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span><h4><strong> Hometown: </strong>HollyWood, California</h4></span>
                        </div></div>

                        <div id="4B" className="row profBG font8">
                            <div id="col1D" className="col-sm-12 col-md-12 col-lg-12"><span role="img"><h4><strong>Bio:</strong> {this.state.valueAboutMe}</h4></span>
                            </div>
                        </div>
                        <div id="5B" className="row profBG font8">
                            <div id="col1E" className="col-sm-12 col-md-12 col-lg-12"><a href="https://www.rihannanow.com" style={{ color: 'black' }} ><h4><strong>www.rihannanow.com</strong></h4></a>
                            <br/>
                            </div>
                        </div>
                        {/* <a href="/create"><button type="submit" className="blueButton"> Create New Story <Glyphicon glyph="glyphicon glyphicon-plus"/></button></a> */}
                    </div>
                </div> {/* 1x */}
                <div className='row flags' style={{backgroundColor: 'rgb(245,245,245)'}} >
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><img id="" className="img-responsive" src={require("../img/flag_usa.png")} alt="" /></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><img id="" className="img-responsive" src={require("../img/flag_add.png")} alt="" /></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><img id="" className="img-responsive" src={require("../img/flag_add.png")} alt="" /></div>
                </div>
                <div className='row socialBtnRow' style={{backgroundColor: 'rgb(245,245,245)'}} >
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><button className='whiteBtnSoc'>1,111 Following </button></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><button className='whiteBtnSoc'>2,222 followers</button></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><button className='whiteBtnSoc'>3,333 stories</button></div>
                </div>
            </div>

                <div className="row">
                <ViewProfileAllShelf />
                </div>
            </div>
        );
    }
}

export default ViewProfile;

            {/* <div className='container' style={{ marginTop: '7%' }}>

                

                <div id="1A" className="row" style={{ backgroundColor: '#F6F6F6', marginBottom: '50px' }}>

                    <div id="col2A" className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div id="col1A" className="col-sm-4 col-md-4 col-lg-4 " style={{ marginTop: '50px', marginBottom: '50px', }} >
                        <img id="" className="img-responsive img-circle" src={require("../img/profileBrian.png")} alt="profpic" />
                    </div>
                    <div id="col2A" className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div id="col2A" className="col-sm-6 col-md-6 col-lg-6">

                        <div id="1B" className="row" style={{ backgroundColor: '#F6F6F6', marginBottom: '10px' }}>
                            <div id="col1B" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <br />
                                <br />
                                <h2>Brian Helm<Button style={{marginLeft: '2%' }} className="btn-xs blueButtonSm"><Glyphicon glyph="glyphicon glyphicon-plus" style={{ margin: '2%' }} />Add</Button></h2>
                            </div>
                        </div>

                        <div id="2B" className="row" style={{ backgroundColor: '#F6F6F6(157, 156, 228)', marginBottom: '10px' }}>
                            <div id="col1C" className="col-sm-4 col-md-4 col-lg-4"><a href="" style={{ color: 'black' }} ><h4>53 Stories </h4></a>    <a href="" style={{ color: 'black' }} ><h4>7.2k Followers</h4></a>    <a href="" style={{ color: 'black' }} ><h4>2,547 Following</h4></a></div>
                            <div id="col2C" className="col-sm-2 col-md-2 col-lg-2"></div>
                            <div id="col3C" className="col-sm-2 col-md-2 col-lg-2"></div>
                        </div>

                        <div id="3B" className="row" style={{ backgroundColor: '#F6F6F6(146, 231, 146)', marginBottom: '10px' }}>
                            <div id="col1D" className="col-sm-12 col-md-12 col-lg-12"><span role="img"><h4>Software Development</h4></span>
                            </div>
                        </div>
                        <div id="4B" className="row" style={{ backgroundColor: '#F6F6F6(146, 231, 146)', marginBottom: '12px' }}>
                            <div id="col1E" className="col-sm-12 col-md-12 col-lg-12"><a href="" style={{ color: 'black' }} ><h4>www.website.com</h4></a>
                                <br />
                            </div>
                        </div>
                        <a href=""><Button type="submit" className="blackButton"><Glyphicon glyph="glyphicon glyphicon-plus" />Follow</Button></a>
                    </div>

                </div>

                <div className="row" style={{ backgroundColor: '#F6F6F6' }}>
                    <div id="col3A" className="col-sm-5 col-md-5 col-lg-5"></div>
                    <div id="col3A" className="col-sm-1 col-md-1 col-lg-1"><span style={{ color: 'black', marginBottom: '5%' }} ><strong></strong></span></div>
                    <div id="col4A" className="col-sm-1 col-md-1 col-lg-1"><span style={{ color: 'black', marginBottom: '5%' }} ><strong></strong></span></div>
                    <div id="col3A" className="col-sm-5 col-md-5 col-lg-5"></div>
                </div>

                <div className="row">
                    <ViewProfileShelf />
                </div>
            </div> */}