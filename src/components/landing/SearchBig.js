import React from 'react';
import {Jumbotron, FormGroup, FormControl} from 'react-bootstrap';
import '../../App.css';

const SearchBig = () => {
  return(
    <div style={{marginTop: '-8%'}}>
    <Jumbotron className="jumboSearch">
        <div className='container-fluid'><div className='row'>
          <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
          <FormGroup id="searchhome" className="has-feedback">
            <FormControl id="searchtext" type="text" placeholder="Search Mystorya" />
            <i className="glyphicon glyphicon-search form-control-feedback"></i>
          </FormGroup>{' '}
          </div>
          <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 boxWhite'>SEARCH GENRES</div>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
        </div></div>
    </Jumbotron>
    </div>
  );
}

export default SearchBig;
