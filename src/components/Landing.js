import React from 'react';
import SplashPage from './landing/SplashPage';
import SearchBig from './landing/SearchBig';
import BookShelf from './BookShelf';

const Landing = () => {
    return (
      <div>
      <SplashPage/>
      <SearchBig/>
      <BookShelf/>
      </div>
    );
};

export default Landing;

