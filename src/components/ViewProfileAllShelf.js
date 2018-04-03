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
import ViewProfileShelfOther from './ViewProfileShelfOther';
import ViewProfileShelfFav from './ViewProfileShelfFav';
import ViewProfileFriend from './ViewProfileFriend';

class ViewProfileAllShelf extends Component {

    render() {

        return (
            <div>
                <ViewProfileShelfOther/>
                <ViewProfileShelfFav/>
                <ViewProfileFriend/>
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

export default ViewProfileAllShelf;