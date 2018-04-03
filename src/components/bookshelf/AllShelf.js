import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookShelfEducation from './BookShelfEducation';
import BookShelfFood from './BookShelfFood';
import BookShelfMusic from './BookShelfMusic';
import BookShelfPopular from './BookShelfPopular';
import BookShelfNew from './BookShelfNew';
import BookShelfGaming from './BookShelfGaming';
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
                <BookShelfFood />
                <BookShelfMusic />
                <BookShelfSports />
                <BookShelfTech />
                <BookShelfGaming />
                <BookShelfEducation />
            </div>

        );
    }
}

export default AllShelf;