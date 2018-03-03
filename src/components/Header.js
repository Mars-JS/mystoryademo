import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Nav.css'
import Search from './landing/Search';

const Nav = () => (
  <Navbar id="nav" className="navbar-form navbar-fixed-top">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><img id="logo" src={require("../img/mysLogo00.png")} alt="logo"/></a>
        <a href="#home"><img id="brand" src={require("../img/mystolo.png")} alt="my storya"/></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullRight id="search">
        <a href="/"><button className="signupBtn" type="submit" className="signUpBtn btn" style={{color: 'white', backgroundColor: 'black'}}>Logout</button></a>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>

);
export default Nav;
