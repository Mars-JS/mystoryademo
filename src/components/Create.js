import React, { Component } from 'react';
import { Alert, Button, Glyphicon, FormGroup, ControlLabel, FormControl, Tabs, Tab } from "react-bootstrap";
import FlipPage from 'react-flip-page';
import '../App.css';
import Nav from "./Header";
import BookShelfNew from './BookShelfNew';
import SelectPage from './SelectPage';

class CreateTemp extends Component {
  constructor(props, context) {
      super(props, context);

      this.handleChange = this.handleChange.bind(this);
      this.handleChangeBody = this.handleChangeBody.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
      this.handleDismiss = this.handleDismiss.bind(this);
      this.handleShow = this.handleShow.bind(this);

      this.state = {
        value: '',
        valueBody: '',
        file: '',
        imagePreviewUrl: '',
        key: 1,
        show: true
      };
  }

  handleSelect(key) {
      /* alert(`selected ${key}`); */
      this.setState({ key });
  }

  _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
          this.setState({
              file: file,
              imagePreviewUrl: reader.result
          });
      }

      reader.readAsDataURL(file)
  }
  
  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleChangeBody(e) {
    this.setState({ valueBody: e.target.value });
  }

  getValidationState() {
      const length = this.state.value.length;
      if (length > 3) return 'success';
      else if (length > 1) return 'warning';
      else if (length > 0) return 'error';
      return null;
  }

  getValidationStateBody() {
      const length = this.state.valueBody.length;
      if (length > 3) return 'success';
      else if (length > 1) return 'warning';
      else if (length > 0) return 'error';
      return null;
  }

  renderMenu() {
    if (this.state.show) {
      return (
        <div>
          <Button onClick={this.handleDismiss}>Hide</Button>
          <Alert bsStyle="" onDismiss={this.handleDismiss}>
            <div className='row'><div className='col-sm-3 col-md-4 col-lg-4'>
              <div className="previewComponent">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                  <input className="fileInput"
                    type="file"
                    onChange={(e) => this._handleImageChange(e)} />
                  <button className="submitButton2"
                    type="submit"
                    onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                </form>
              </div>
            </div>
              <div className='col-sm-3 col-md-4 col-lg-4' style={{ textAlign: 'left', textColor: 'white' }}>
                <form>
                  <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                    <ControlLabel>New Title:</ControlLabel>
                    <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} />
                    <FormControl.Feedback />
                  </FormGroup>
                </form>
              </div></div>
          </Alert>
        </div>
      );
    }
    return <Button onClick={this.handleShow}>Change cover & title</Button>;
  }

  render() {
      let { imagePreviewUrl } = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
          $imagePreview = (<img style={{ width: '1280px', height: '720px' }} src={imagePreviewUrl} />);
      } else {
          $imagePreview = (<div className="previewText">Preview your book here as you create</div>);
      }
      return (
          <div className="container-fluid">
              <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'><Nav /></div></div>
              <div className='row darkWood' style={{ marginTop: '7%' }}>
            <div className='container'>
              <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'>{this.renderMenu()}</div></div></div>
                  <div className='container'>

                  <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'><h1 className="whiteBG" style={{ textAlign: 'center' }}>{this.state.value}</h1></div></div>
                  <div className='row' style={{ marginBottom: '5%' }}>
                      <div className='col-sm-12 col-md-12 col-lg-12'>
                          <FlipPage flipOnTouch='true' loopForever='true' height='720' width='1280px' orientation='horizontal' uncutPages='true' maxAngle='65' animationDuration='400'>
                              
                              <article> {/* cover page */}
                                  <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'>
                                      <div className="imgPreview img-responsive">{$imagePreview}</div>
                                  </div>
                                  </div>
                              </article>

                              <article >
                                  <div className='container'>
                                      <div style={{ textAlign: 'left', left: '5%', bottom: '-25px', position: 'absolute' }}>page 1</div>
                                      <div style={{ textAlign: 'right', right: '5%', bottom: '-25px', position: 'absolute' }}>page 2</div>
                                      <div className='row'>

                                          <div className='col-sm-6 col-md-6 col-lg-6'> {/* page 1 */}
                                              <div className='row' style={{ margin: '3px' }}>
                                                  <p className='font4'>sample title</p>
                                                  <img alt="" className="img-responsive pictureShadow" src={require("../img/rihannaPage2.jpg")} />
                                              </div>
                                              <div className='row' >
                                                  <div className='col-sm-12 col-md-12 col-lg-12'>
                                                      <SelectPage />
                                                  </div>
                                              </div>
                                          </div>

                                          <div className='col-sm-6 col-md-6 col-lg-6'> {/* page 2 */}
                                              <div className='container'>

                                                  <div className="container"><div className='row' style={{ margin: '3px' }}>
                                                      <div className='col-sm-12 col-md-12 col-lg-12'>
                                                          <p style={{ textAlign: 'left', marginRight: '58%' }}>
                                                              Nibh praesent tristique magna sit amet purus. Ut faucibus
                                                          integer. Volutpat commodo sed egestas egestas fringilla phasellus
                                                          faucibus scelerisque.</p></div></div></div>

                                                  <div className="container"> <div className='row' style={{ margin: '3px' }}>
                                                      <div className='col-sm-12 col-md-12 col-lg-12'>
                                                          <p style={{ textAlign: 'left', marginRight: '58%' }}>Massa
                                                          sollicitudin aliquam ultrices sagittis orci a scelerisque
                                                          purus. Quisque sagittis purus sit amet volutpat consequat.
                                                          Vel fringilla est ullamcorper eget nulla. Duis tristique
                                                          sollicitudin nibh sit amet commodo nulla. Odio aenean sed
                                                          adipiscing diam donec adipiscing tristique risus nec.
                                                          Etiam erat velit scelerisque in dictum non consectetur a.
                                                          Neque ornare aenean euismod elementum. </p></div></div></div>
                                            </div>

                                              <div className='row'>
                                                <div className="col-sm-4 col-md-8 col-lg-12">
                                                  <iframe className='videoPlayer' width="480px" height="272px" src="https://www.youtube.com/embed/0RyInjfgNc4" />
                                                </div>
                                              </div>

                                          </div>

                                    </div></div>
                              </article>

                              <article>
                                  <div className="container">
                                      <div style={{ textAlign: 'left', left: '7%', bottom: '-25px', position: 'absolute' }}>page 3</div>
                                      <div style={{ textAlign: 'right', right: '7%', bottom: '-25px', position: 'absolute' }}>page 4</div>
                                      <div className="row">
                                          <div className="col-sm-6 col-md-6 col-lg-6"> {/* page 3 */}
                                              <h1>My awesome 1 article</h1>
                                              <p>My awesome 1 content</p>
                                          </div>
                                          <div className="col-sm-6 col-md-6 col-lg-6"> {/* page 4 */}
                                              <h1>My awesome 2 article</h1>
                                              <p>My awesome 2 content</p>
                                          </div>
                                      </div>
                                  </div>
                              </article>
                              <article>
                                  <div className='row'>
                                      <div className='col-sm-6 col-md-6 col-lg-6'> {/* page 5 */}
                                          <h1>definition synopsis</h1>
                                          <p>definition synopis</p>
                                      </div>
                                      <div className='col-sm-6 col-md-6 col-lg-6'> {/* page 6 */}
                                          <h1>My awesome synopsis article</h1>
                                          <p>My awesome synopsis content</p>
                                      </div>
                                  </div>
                              </article>
                          </FlipPage>
                      </div>
                  </div>
              </div>
                  
              </div>

              <div className="row"><div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                  <BookShelfNew />
                  <BookShelfNew />
              </div></div>


          </div>
      )
  }
}

export default CreateTemp;
