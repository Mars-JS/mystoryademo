import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import BookShelfEducation from './BookShelfEducation';
import BookShelfFood from './BookShelfFood';
import BookShelfMusic from './BookShelfMusic';
import BookShelfPopular from './BookShelfPopular';
import BookShelfTech from './BookShelfTech';
import BookShelfTravel from './BookShelfTravel';
=======
import AllShelf from './bookshelf/AllShelf';
>>>>>>> eccf84c0f5d0e7ceba80de33ba643c4d605e382b
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
<<<<<<< HEAD
                <BookShelfPopular />
                <BookShelfTravel />
                <BookShelfFood />
                <BookShelfMusic />
                <BookShelfTech />
                <BookShelfEducation />
=======
                <AllShelf />
>>>>>>> eccf84c0f5d0e7ceba80de33ba643c4d605e382b
            </div>

        );
    }
}

export default ProfileAllShelf;