import React from 'react';
import Splash from './landing/Splash';
import SearchBig from './landing/SearchBig';
import AllShelf from './bookshelf/AllShelf';
/* import BookShelfNew from './BookShelfNew'; */

const Landing = () => {
    return (
      <div>
      <Splash/>
      <SearchBig/>
      <AllShelf />
      {/* <BookShelfNew/> */}
      </div>
    );
};

export default Landing;

