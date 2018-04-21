import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Splash extends Component {
      constructor(props, context) {
        super(props, context);

        this.handleShowSearch = this.handleShowSearch.bind(this);
        this.handleCloseSearch = this.handleCloseSearch.bind(this);

        this.state = {
            showSearch: false
        };
    }

    handleCloseSearch() {
        this.setState({ showSearch: false });
    }

    handleShowSearch() {
        this.setState({ showSearch: true });
    }
  render(){
  return (
  <div className="container-fluid">
              <div>
                <Modal show={this.state.showSearch} onHide={this.handleCloseSearch}>
                    <Modal.Header closeButton>
                        <Modal.Title className='font3'>Log in with email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container-fluid'> <div className='row' style={{ margin: '1%'}}>   
                        <form >
                            <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                                <p className='font5'>Display Name:</p>
                                <input type="text" placeholder='display name' />
                                </label></div></div>
                            <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                                <p className='font5'>Email:</p>
                                <input type="text" rows={1} cols={10} placeholder='email' />
                            </label></div></div>
                            <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                                <p className='font5'>Password:</p>
                                <input type="text" rows={1} cols={10} placeholder='*********' />
                            </label></div></div>
                        </form>
                        </div></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='modalCloseBtn' onClick={this.handleCloseSearch}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
      <div className="row jumbophoto">
              
        <div className='splashRowA'>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
         
         <div id="row10e" className="row" style={{marginTop: '24%' }}>
           <div className='logoSplashText font0'><span style={{fontWeight:'900'}}>My</span>storya</div> 
              <img alt="" className="img-responsive imgLogoText" src={require("../../img/logoTextBlue.png")} />
         </div>

          <div id="row10e" className="row" style={{ marginTop: '15%' }}>
            <div className='logoSplashText font9'>
              <div className='row'>One World,</div>
              <div className='row'>Many Stories.</div>
              <div className='row'>Share Yours.</div>
            </div>
          </div>

            <div id="row10b" className="row" style={{ marginBottom: '1%', marginLeft: '24%', marginTop: '10%' }}>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <a className="loginbtn" href="/profile"><button className="loginBtn loginBtn--facebook">Login with Facebook</button></a>
            </div>
          </div>
          
          <div id="row10c" className="row" style={{ marginBottom: '1%', marginLeft: '24%' }}>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <button className="loginBtn loginBtn--google"><a className="loginbtn" href="/profile">Login with Google</a></button>
            </div>
          </div>

          <div id="row10a" className="row" style={{ marginBottom: '1%', marginLeft: '24%'}}>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <button onClick={this.handleShowSearch} className="loginBtn loginBtn--custom"><a className="loginbtn" onClick={this.handleShowSearch}>Login with email</a></button>
            </div>
          </div>

          {/* <div id="row10d" className="row" style={{ marginBottom: '2%', marginLeft: '20%' }}>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <div className='col-xs-2 col-sm-2 col-md-2 col-lg-12 platformButton'>OUR PLATFORM</div>
            </div>
          </div> */}
            
        </div></div>

        <div className="col-xs-1 col-sm-2 col-md-8 col-lg-8"></div> {/* spacer horizontal */}

    </div>
  </div>);
  }
};

export default Splash;

/* old splash
              <div id="row4" className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <input className="form-control input-sm" type="text" placeholder="Username"/>
                </div>
              </div>

              <div id="row5" className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <input className="form-control input-sm" type="text" placeholder="Email"/>
                </div>
              </div>

              <div id="row6" className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <input className="form-control input-sm" type="text" placeholder="Password"/>
                </div>
              </div>

              <div id="row7" className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <input className="form-control input-sm" type="text" placeholder="Confirm Password"/>
                </div>
              </div>
              <br/>
              <div id="row8" className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <button type="submit" className="btn" style={{color: 'white'}}>Sign Up</button>

                </div>
              </div> */