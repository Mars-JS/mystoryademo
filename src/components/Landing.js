import React from 'react';
import SplashPage from './landing/SplashPage';
import SearchBig from './landing/SearchBig';
import BookShelf from './BookShelf';
import BookShelfNew from './BookShelfNew';

const Landing = () => {
    return (
      <div>
      <SplashPage/>
      <SearchBig/>
      <BookShelfNew/>
      <BookShelf/>
      </div>
    );
};

export default Landing;

