import React, { Component } from 'react';
import '../App.css';
import ProfileBookShelf from './ProfileBookShelf'

class Profile extends Component {

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="container-fluid">

                    <div id="1A" className="row" style={{ backgroundColor: '#F6F6F6' }}>

                        <div id="col1A" className="col-sm-4 col-md-4 col-lg-4 " style={{ marginBottom: '2px'}} >
                            <img id="" className="img-responsive img-rounded" src={require("../img/patProfile.png")} alt="profilepic" />
                        </div>

                        <div id="col2A" className="col-sm-8 col-md-8 col-lg-8">
                            <div id="1B" className="row" style={{ backgroundColor: '#F6F6F6' }}>
                                <div id="col1B" className="col-sm-6 col-md-6 col-lg-6"><h2>pat_hustad <button type="button" id="editProfileButton" className="btn-primary btn btn-xs float-left">Edit Profile</button></h2></div>
                                <div id="col2B" className="col-sm-6 col-md-6 col-lg-6 "></div>
                            </div>

                            <div id="2B" className="row" style={{ backgroundColor: '#F6F6F6(157, 156, 228)', marginBottom: '12px' }}>
                                <div id="col1C" className="col-sm-8 col-md-8 col-lg-8"><a href="">521 Stories</a>  |  <a href="">12.4k Followers</a>  |  <a href="">2,017 Following</a></div>
                                <div id="col2C" className="col-sm-2 col-md-2 col-lg-2"></div>
                                <div id="col3C" className="col-sm-2 col-md-2 col-lg-2"></div>
                            </div>

                            <div id="3B" className="row" style={{ backgroundColor: '#F6F6F6(146, 231, 146)', marginBottom: '12px'}}>
                                <div id="col1D" className="col-sm-12 col-md-12 col-lg-12">P A T H U S T A D<span role="img"> 🌴🌴🌴🌴🌴🌴</span><a href="">www.pathustad.com</a>
                                </div>
                            </div>
                            <button id="editProfileButton" type="submit" className="btn-primary btn float-left"> Create New Story <span className="glyphicon glyphicon-plus"> </span></button>
                        </div>

                    </div>

                    <div id="save" className="row" style={{ backgroundColor: '#396fc6' }}>
                        <div id="col3A" className="col-sm-6 col-md-6 col-lg-6"><span className="pull-right" style={{ color: 'black'}} >Stories</span></div>
                        <div id="col4A" className="col-sm-6 col-md-6 col-lg-6"><span className="pull-left" style={{ color: 'black' }} >Saved</span></div>
                    </div>
                </div>
                <ProfileBookShelf />
            </div>
        );
    }
}

export default Profile;
