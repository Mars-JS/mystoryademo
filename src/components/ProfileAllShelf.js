import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllShelf from './bookshelf/AllShelf';
import ProfileShelfMyStories from './ProfileShelfMyStories';
import ProfileShelfMySocial from './ProfileShelfMySocial';
import ProfileShelfMyProjects from './ProfileShelfMyProjects';
import ProfileShelfFriends from './ProfileShelfFriends';
import ProfileShelfFamily from './ProfileShelfFamily';
import ProfileShelfClasses from './ProfileShelfClasses';

class ProfileAllShelf extends Component {

    render() {

        return (
            <div>
                <ProfileShelfMyStories/>
                <ProfileShelfMySocial/>
                <ProfileShelfFamily/>
                <ProfileShelfFriends/>
                <ProfileShelfClasses/>
                <ProfileShelfMyProjects/>
                <AllShelf />
            </div>

        );
    }
}

export default ProfileAllShelf;