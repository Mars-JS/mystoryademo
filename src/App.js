import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


import Footer from "./components/landing/Footer";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import ViewProfile from "./components/ViewProfile";
import Book1 from "./components/Book1";
import Book2 from "./components/Book2";
import Book7 from "./components/Book7";
import BookShelfControl from "./components/BookShelfControl";
import Create from "./components/Create";
/* const Header = 'header'; */
/* const Book1 = 'book1'; */
/* const Book2 = 'book2'; */
/* const BookShelf = 'BookShelf'; */

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="entireSiteBG">
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/viewProfile" component={ViewProfile} />
          <Route exact path="/books/1" component={Book1} />
          <Route exact path="/books/2" component={Book2} />
          <Route exact path="/books/7" component={Book7} />
          <Route exact path="/books" component={Landing} />
          <Route exact path="/create" component={Create} />
          <BookShelfControl />
          <Footer/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
