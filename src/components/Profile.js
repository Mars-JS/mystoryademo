import React, { Component } from 'react';
import { Button, ControlLabel, FormGroup, Glyphicon, FormControl, Popover, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';
/* import '../App.css'; */
import ProfileBookShelf from './ProfileBookShelf';


class Profile extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseSave = this.handleCloseSave.bind(this);
        this.handleChangeDisplayName = this.handleChangeDisplayName.bind(this);
        this.handleChangeAboutMe = this.handleChangeAboutMe.bind(this);

        this.state = {
            show: false,
            valueDisplayName: 'pat_hustad',
            valueAboutMe: '🌴🌴Software + Design + Surfing🌴🌴'
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

        let tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        let popover = (
        <Popover id="modal-popover" title="popover">
                very popover. such engagement
        </Popover>
        );

        return (
            <div className='container' style={{ marginTop: '7%' }}>

                
                <Modal bsSize='sm' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Profile: Pat Hustad</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container-fluid'> <div className='row' style={{ margin: '1%'}}>   
                        <form onSubmit={this.handleSubmit}>
                            <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                                <label>
                                    <p>Display Name:</p>
                                    <input type="text"
                                        value={this.state.valueDisplayName}
                                        placeholder={this.state.valueDisplayName}
                                        onChange={this.handleChangeDisplayName} />
                                </label>
                            </div></div>
                            <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                                <p>About me:</p>
                                <textarea type="textarea" rows={9} cols={22}
                                    value={this.state.valueAboutMe}
                                    placeholder={this.state.valueAboutMe}
                                    onChange={this.handleChangeAboutMe} />
                            </label></div></div>
                            <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                                <p>First Name:</p>
                                <input type="text" rows={1} cols={10} placeholder='pat'/>
                            </label></div></div>
                            <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                                <p>Last Name:</p>
                                <input type="text" rows={1} cols={10} placeholder='hustad' />
                            </label></div></div>
                            <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                                <p>Location:</p>
                                <input type="text" rows={1} cols={10} placeholder='Palo Alto' />
                            </label></div></div>
                            <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                                <p>Website:</p>
                                <input type="text" rows={1} cols={10} placeholder='www.pathustad.com' />
                            </label></div></div>
                        </form>
                        </div></div>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={this.handleCloseSave} type="submit" value="Submit">Save</Button>
                    </Modal.Footer>
                </Modal>
                

                <div id="1A" className="row" style={{ backgroundColor: '#F6F6F6', marginBottom: '50px'  }}>

                    <div id="col2A" className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div id="col1A" className="col-sm-4 col-md-4 col-lg-4 " style={{ marginTop: '50px' , marginBottom: '50px', }} >
                        <img id="" className="img-responsive img-circle" src={require("../img/patProfile.png")} alt="profilepic" />
                    </div>
                    <div id="col2A" className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div id="col2A" className="col-sm-6 col-md-6 col-lg-6">
                    
                        <div id="1B" className="row" style={{ backgroundColor: '#F6F6F6', marginBottom: '10px' }}>
                            <div id="col1B" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <br/>
                                <h2>{this.state.valueDisplayName}<Button onClick={this.handleShow} style={{ backgroundColor: 'black' }} className="btn-primary btn btn-xs">Edit Profile </Button><Glyphicon glyph="glyphicon glyphicon-cog" style={{ color: 'black', margin: '2%' }} /></h2>
                            </div>
                        </div>

                        <div id="2B" className="row" style={{ backgroundColor: '#F6F6F6(157, 156, 228)', marginBottom: '10px' }}>
                            <div id="col1C" className="col-sm-4 col-md-4 col-lg-4"><a href="" style={{ color: 'black' }} ><h4>521 Stories </h4></a>    <a href="" style={{ color: 'black' }} ><h4>12.4k Followers</h4></a>    <a href="" style={{ color: 'black' }} ><h4>2,759 Following</h4></a></div>
                            <div id="col2C" className="col-sm-2 col-md-2 col-lg-2"></div>
                            <div id="col3C" className="col-sm-2 col-md-2 col-lg-2"></div>
                        </div>

                        <div id="3B" className="row" style={{ backgroundColor: '#F6F6F6(146, 231, 146)', marginBottom: '10px' }}>
                            <div id="col1D" className="col-sm-12 col-md-12 col-lg-12"><span role="img"><h4>{this.state.valueAboutMe}</h4></span>
                            </div>
                        </div>
                        <div id="4B" className="row" style={{ backgroundColor: '#F6F6F6(146, 231, 146)', marginBottom: '12px' }}>
                            <div id="col1E" className="col-sm-12 col-md-12 col-lg-12"><a href="" style={{ color: 'black' }} ><h4>www.pathustad.com</h4></a>
                            <br/>
                            </div>
                        </div>
                        <a href="/create"><button type="submit" style={{ backgroundColor: 'black' }} className="btn-primary btn"> Create New Story <Glyphicon glyph="glyphicon glyphicon-plus"/></button></a>
                    </div>

                </div>

                <div className="row" style={{ backgroundColor: '#F6F6F6' }}>
                    <div id="col3A" className="col-sm-5 col-md-5 col-lg-5"></div>
                    <div id="col3A" className="col-sm-1 col-md-1 col-lg-1"><span style={{ color: 'black', marginBottom: '5%' }} ><strong></strong></span></div>
                    <div id="col4A" className="col-sm-1 col-md-1 col-lg-1"><span style={{ color: 'black', marginBottom: '5%' }} ><strong></strong></span></div>
                    <div id="col3A" className="col-sm-5 col-md-5 col-lg-5"></div>
                </div>

                <div className="row">
                    <ProfileBookShelf />
                </div>
            </div>
        );
    }
}

export default Profile;
