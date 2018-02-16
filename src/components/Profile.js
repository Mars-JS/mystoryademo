import React, { Component } from 'react';

class Profile extends Component {

    render() {
        return (
            <div>
                <div className="container">

                    <div id="1A" className="row" style={{backgroundColor:'F6F6F6'}}>

                        <div id="col1A" className="col-sm-4 col-md-4 col-lg-4">
                            <img id="profilePic" className="img-responsive pull-right center-block" src={require("../img/patProfile.png")} alt="profilepic"/>
                        </div>

                        <br />
                        <div id="col2A" className="col-sm-8 col-md-8 col-lg-8">
                            <div id="1B" className="row" style={{backgroundColor :'F6F6F6'}}>
                                <div id="col1B" className="col-sm-6 col-md-6 col-lg-6"><h2>pat_hustad</h2></div>
                                <div id="col2B" className="col-sm-6 col-md-6 col-lg-6"><button type="button" id="editProfileButton" className="btn-primary btn btn-xs">Edit Profile</button></div>
                            </div>
                            <br />
                            <div id="2B" className="row" style={{backgroundColor: 'F6F6F6(157, 156, 228)'}}>
                                <div id="col1C" className="col-sm-4 col-md-4 col-lg-4"><h4>999 STORIES</h4></div>
                                <div id="col2C" className="col-sm-4 col-md-4 col-lg-4"><h4> 999 Followers</h4></div>
                                <div id="col3C" className="col-sm-4 col-md-4 col-lg-4"><h4> 999 Following</h4></div>
                            </div>
                            <br />
                            <div id="3B" className="row" style={{backgroundColor: 'F6F6F6(146, 231, 146)'}}>
                                <div id="col1D" className="col-sm-12 col-md-12 col-lg-12"><h4>P A T H U S T A D<span role="img"> 🌴🌴🌴🌴🌴🌴</span>jrehfdkghjsdkjghdfkx kjdfgh,kdfhzgdfskjh lfjghskgjhdfkls j www.pathustad.com</h4>
                                </div>
                            </div>
                            <button id="createStory" type="submit" className="btn-primary btn center-block">Create New Story <span className="glyphicon glyphicon-plus"> </span></button>
                        </div>
                    </div>
                    <div id="save" className="row" style={{backgroundColor: '4e919e'}}>
                        <div id="col3A" className="col-sm-6 col-md-6 col-lg-6">Stories</div>
                        <div id="col4A" className="col-sm-6 col-md-6 col-lg-6">Saved</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
