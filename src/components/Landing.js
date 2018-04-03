import React from 'react';
import SplashPage from './landing/SplashPage';
import SearchBig from './landing/SearchBig';
import AllShelf from './bookshelf/AllShelf';
/* import BookShelfNew from './BookShelfNew'; */

const Landing = () => {
    return (
      <div>
      <SplashPage/>
      <SearchBig/>
      <AllShelf />
      {/* <BookShelfNew/> */}
      </div>
    );
};

export default Landing;

