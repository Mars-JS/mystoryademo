import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookShelfEducation from './BookShelfEducation';
import BookShelfFood from './BookShelfFood';
import BookShelfMusic from './BookShelfMusic';
import BookShelfPopular from './BookShelfPopular';
import BookShelfSports from './BookShelfSports';
import BookShelfTech from './BookShelfTech';
import BookShelfTravel from './BookShelfTravel';
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
                <BookShelfPopular />
                <BookShelfTravel />
                <BookShelfFood />
                <BookShelfMusic />
                <BookShelfSports />
                <BookShelfTech />
                <BookShelfEducation />
            </div>

        );
    }
}

export default ProfileAllShelf;