import React from 'react';
import { Navbar } from 'react-bootstrap';
/* import './Nav.css' */
import Search from './landing/Search';

const Header = () => (
  <div>
    <Navbar className="navbar-form navbar-fixed-top" style={{ backgroundColor: 'transparent', marginTop: '-2px' }}>
    <Navbar.Header>
      <Navbar.Brand><div className='container'>
        <div className='row'>
          <div className='col-xs-4 col-sm-6 col-md-12 col-lg-12'>
            <a href="/"><img src={require("../img/mysLogo00.png")} alt="logo" /></a>
           {/* <a href="/"><img src={require("../img/mystolo.png")} alt="my storya" /></a>*/}
          </div>
        </div>
      </div>
      </Navbar.Brand>
      <Navbar.Form >
        <div className='container'>
          <div className='row'>
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
              <Search />
            </div>
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
          </div>
        </div>
      </Navbar.Form>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Form pullRight>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5'></div>
              <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5'></div>
              <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                <a href="/"><button type="submit" className="btn" style={{ color: 'white', backgroundColor: 'black', marginTop: '-49%' }}>Logout</button></a>
              </div></div></div>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar.Header>
  </Navbar>
  </div>
);

export default Header;
