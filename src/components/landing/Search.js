import React from 'react';

const Search = () => {
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <input type='text' style={{textAlign: 'center'}} placeholder='Search Stories'>
          </input>
          <button>
            <span className="glyphicon glyphicon-search" style={{ color: 'grey' }}></span>
          </button>
      </div>
    </div>
    </div>
  );
}

export default Search;