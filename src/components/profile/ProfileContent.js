import React, { Component } from 'react';
import { Button, Glyphicon, Modal, Popover, OverlayTrigger } from 'react-bootstrap';
import ProfileAllShelf from '../ProfileAllShelf';
import ProfilePhotos from './ProfilePhotos';
import ProfileVideos from './ProfileVideos';
import ProfileNewsfeed from './ProfileNewsfeed';
import ProfileFriendsFamily from './ProfileFriendsFamily';


class ProfileContent extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSwitchPhotos = this.handleSwitchPhotos.bind(this);
        this.handleSwitchVideos = this.handleSwitchVideos.bind(this);
        this.handleSwitchStories = this.handleSwitchStories.bind(this);
        this.handleSwitchNewsfeed = this.handleSwitchNewsfeed.bind(this);
        this.handleSwitchFriendsFamily = this.handleSwitchFriendsFamily.bind(this);
        
        this.state = {
            showFollow: 'stories'
        };
    }
        
    handleSwitchStories() {
        if (window.scrollY < 545){window.scrollTo(0, 550)};
        this.setState({ showFollow: 'stories' });
    }
    handleSwitchPhotos() {
        if (window.scrollY < 545){window.scrollTo(0, 550)};
        this.setState({ showFollow: 'photos' });
    }
    handleSwitchVideos() {
        if (window.scrollY < 545){window.scrollTo(0, 550)};
        this.setState({ showFollow: 'videos' });
    }
    handleSwitchNewsfeed() {
        if (window.scrollY < 545){window.scrollTo(0, 550)};
        this.setState({ showFollow: 'newsfeed' });
    }
    handleSwitchFriendsFamily() {
        if (window.scrollY < 545){window.scrollTo(0, 550)};
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
        if (this.state.showFollow === 'videos') {
            return (
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ProfileVideos />
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
                    <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
                    <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7' style={{marginLeft:'5%', marginTop: '-3%'}}>
                        
                        <Button className='profBtn' onClick={this.handleSwitchStories} autofocus="autofocus" > stories </Button>

                        <Button className='profBtn' onClick={this.handleSwitchPhotos} > photos </Button>

                        <Button className='profBtn' onClick={this.handleSwitchVideos} > videos </Button>

                        <Button className='profBtn' onClick={this.handleSwitchNewsfeed} > newsfeed </Button>

                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                </div>
                {this.renderSwitch()}
                
            </div>
        );
    }


}

export default ProfileContent;