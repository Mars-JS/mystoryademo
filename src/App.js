import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from "./components/landing/Footer";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import ViewProfile from "./components/ViewProfile";
import Book7 from "./components/Book7";
import Create from "./components/Create";
import BookShelfTemp from './components/BookShelfTemp';
import TempCreate2 from "./components/template/TempCreate2";
/* const Header = 'header'; */
/* const Book1 = 'book1'; */
/* const Book2 = 'book2'; */
/* const BookShelf = 'BookShelf'; */

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="entireSiteBG">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/books" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/viewProfile" component={ViewProfile} />
          <Route exact path="/books/7" component={Book7} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/create2" component={TempCreate2} />
          <BookShelfTemp />
          <Footer/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
