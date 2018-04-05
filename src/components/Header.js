import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Nav.css'

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
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>{' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>

);
export default Nav;
