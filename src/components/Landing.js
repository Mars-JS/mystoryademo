import React from 'react';
import SplashPage from './landing/SplashPage';
import Search from './landing/Search';
import BookShelf from './BookShelf';

const Landing = () => {
    return (
      <div>
      <SplashPage/>
      <Search/>
      <BookShelf/>
      </div>
    );
};

export default Landing;

