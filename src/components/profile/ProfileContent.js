import React, { Component } from 'react';
import { Button, Glyphicon, Modal, Popover, OverlayTrigger } from 'react-bootstrap';
import ProfileAllShelf from '../ProfileAllShelf';
import ProfilePhotos from './ProfilePhotos';
import ProfileNewsfeed from './ProfileNewsfeed';
import ProfileFriendsFamily from './ProfileFriendsFamily';


class ProfileContent extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSwitchPhotos = this.handleSwitchPhotos.bind(this);
        this.handleSwitchStories = this.handleSwitchStories.bind(this);
        this.handleSwitchNewsfeed = this.handleSwitchNewsfeed.bind(this);
        this.handleSwitchFriendsFamily = this.handleSwitchFriendsFamily.bind(this);

        this.state = {
            showFollow: 'stories'
        };
    }
        
    handleSwitchStories() {
        this.setState({ showFollow: 'stories' });
    }
    handleSwitchPhotos() {
        this.setState({ showFollow: 'photos' });
    }
    handleSwitchNewsfeed() {
        this.setState({ showFollow: 'newsfeed' });
    }
    handleSwitchFriendsFamily() {
        this.setState({ showFollow: 'friendsfamily' });
    }
    renderSwitch() {
        if (this.state.showFollow === 'stories') {
            return (
                <ProfileAllShelf />
            );
        }
        if (this.state.showFollow === 'photos') {
            return (
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ProfilePhotos />
                    </div></div>
            );
        }
        if (this.state.showFollow === 'newsfeed') {
            return (
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ProfileNewsfeed />
                </div></div>
            );
        }
        if (this.state.showFollow === 'friendsfamily') {
            return (
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ProfileFriendsFamily />
                </div></div>
            );
        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5'></div>
                    <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>

                        <Button className='profBtn' onClick={this.handleSwitchStories}> stories </Button>

                        <Button className='profBtn' onClick={this.handleSwitchPhotos}> photos </Button>

                        <Button className='profBtn' onClick={this.handleSwitchNewsfeed}> newsfeed </Button>

                        <Button className='profBtn' onClick={this.handleSwitchFriendsFamily}> friendsfamily </Button>

                    </div>
                    <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
                </div>
                {this.renderSwitch()}
                
            </div>
        );
    }


}

export default ProfileContent;