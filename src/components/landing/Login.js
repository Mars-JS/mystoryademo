import React from "react";
import { Button, Modal } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
      <div>
        <Modal show={this.state.showSearch} onHide={this.handleCloseSearch}>
          <Modal.Header closeButton>
            <Modal.Title className="font3">Log in with email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid">
              {" "}
              <div className="row" style={{ margin: "1%" }}>
                <form>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <label>
                        <p className="font5">Display Name:</p>
                        <input type="text" placeholder="display name" />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <label>
                        <p className="font5">Email:</p>
                        <input
                          type="text"
                          rows={1}
                          cols={10}
                          placeholder="email"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <label>
                        <p className="font5">Password:</p>
                        <input
                          type="text"
                          rows={1}
                          cols={10}
                          placeholder="*********"
                        />
                      </label>
                    </div>
                  </div>
                </form>

                <div
                  id="row10b"
                  className="row"
                  style={{
                    marginBottom: "1%",
                    marginLeft: "20%",
                    marginTop: "10%"
                  }}
                >
                  <div className="col-sm-8 col-md-8 col-lg-8">
                    <a className="loginbtn" href="/profile">
                      <button className="loginBtn loginBtn--facebook">
                        <a href="/profile" className="loginbtn">
                          Login with Facebook
                        </a>
                      </button>
                    </a>
                  </div>
                </div>

                <div
                  id="row10c"
                  className="row"
                  style={{ marginBottom: "1%", marginLeft: "20%" }}
                >
                  <div className="col-sm-8 col-md-8 col-lg-8">
                    <a className="loginbtn" href="/profile">
                      <button className="loginBtn loginBtn--google">
                        <a href="/profile" className="loginbtn">
                          Login with Google
                        </a>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="modalCloseBtn" onClick={this.handleCloseSearch}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div
        id="row10a"
        className="row"
        style={{ marginBottom: "1%", marginLeft: "20%" }}
      >
        <div className="col-sm-8 col-md-8 col-lg-8">
          <button
            onClick={this.handleShowSearch}
            className="loginBtn loginBtn--custom"
          >
            <a className="loginbtn" onClick={this.handleShowSearch}>
              Login with email
            </a>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
