import React from 'react';
import { Jumbotron, FormGroup, FormControl } from 'react-bootstrap';
/* import '../../App.css'; */

const Search = () => {
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <input type='text' style={{textAlign: 'center'}} placeholder='Search Mystorya'>
          </input>
          <button>
            <span className="glyphicon glyphicon-search" style={{ color: 'black' }}></span>
          </button>
{/*           <FormGroup >
            <FormControl type="search" placeholder="Search Mystorya" />
            <i className="glyphicon glyphicon-search" style={{ color: 'black' }}></i>
          </FormGroup> */}
      </div>
    </div>
    </div>
  );
}

export default Search;
