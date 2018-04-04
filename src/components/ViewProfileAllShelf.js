import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllShelf from './bookshelf/AllShelf';
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
                <AllShelf />
            </div>
        );
    }
}

export default ViewProfileAllShelf;