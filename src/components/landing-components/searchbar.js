import React from 'react';
import {Jumbotron, FormGroup, FormControl} from 'react-bootstrap';
import '../../App.css';
const Search = () => {
  return(
    <Jumbotron>
    <FormGroup id="searchhome" className="has-feedback">
      <FormControl id="searchtext" type="text" placeholder="Search Mystorya" />
      <i className="glyphicon glyphicon-search form-control-feedback"></i>
    </FormGroup>{' '}
    </Jumbotron>
  );
}

export default Search;
