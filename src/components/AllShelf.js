import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookShelfEducation from './BookShelfEducation';
import BookShelfLife from './BookShelfLife';
import BookShelfMusic from './BookShelfMusic';
import BookShelfPopular from './BookShelfPopular';
import BookShelfNew from './BookShelfNew';
import BookShelfScience from './BookShelfScience';
import BookShelfSports from './BookShelfSports';
import BookShelfTech from './BookShelfTech';
import BookShelfTravel from './BookShelfTravel';

class AllShelf extends Component {

    render() {

        return (
            <div>
                <BookShelfNew />
                <BookShelfPopular />
                <BookShelfTravel />
                <BookShelfLife />
                <BookShelfMusic />
                <BookShelfSports />
                <BookShelfScience />
                <BookShelfEducation />
                <BookShelfTech />
            </div>

        );
    }
}

export default AllShelf;