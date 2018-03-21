import React from 'react';
import '../../App.css';

const Splash = () => {
  return (
  <div className="container-fluid">
    <div className="row">
      <div className="jumbophoto">
        <div className="col-sm-8 col-md-8 col-lg-8"></div>

        <div className="col-sm-4 col-md-4 col-lg-4">

          <div id="row1" className="row" style={{marginTop: '19%'}}>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h1 className='font5'>MYSTORYA</h1>
                <h2 className='font6' style={{ marginTop: '20%' }}>Inspiring <strong>PEOPLE</strong> to </h2>
              <h2 className='font6'>Create Stories </h2>

            </div>
          </div>

          <form className="formPad">

            <fieldset>

                <div id="row10a" className="row" style={{ marginBottom: '1%', marginLeft: '30%', marginTop: '10%'}}>
                <div className="col-sm-8 col-md-8 col-lg-8">
                  <button className="loginBtn loginBtn--facebook"><a className="loginbtn" href="/profile">Login with Facebook</a></button>
                </div>
              </div>
              
                <div id="row10b" className="row" style={{ marginBottom: '2%', marginLeft: '30%' }}>
                <div className="col-sm-8 col-md-8 col-lg-8">
                  <button className="loginBtn loginBtn--google"><a className="loginbtn" href="/profile">Login with Google</a></button>
                </div>
              </div>

              <div id="row10c" className="row" style={{ marginBottom: '2%', marginLeft: '30%' }}>
                <div className="col-sm-8 col-md-8 col-lg-8">
                  <button className="loginBtn loginBtn--custom"><a className="loginbtn" href="/profile">Login with email</a></button>
                </div>
              </div>

            </fieldset>
          </form>

        </div>

      </div>

    </div>
  </div>);
};

export default Splash;

/*
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
                  <button className="signupBtn" type="submit" className="signUpBtn btn" style={{color: 'white'}}>Sign Up</button>

                </div>
              </div> */