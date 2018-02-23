import React from 'react';
import SplashPage from './landing-components/splashpage';
import Search from './landing-components/searchbar';
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

