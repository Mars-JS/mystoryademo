import React, { Component } from 'react';
import { Carousel, Glyphicon, FormGroup, ControlLabel, FormControl, HelpBlock, Tabs, Tab } from "react-bootstrap";
import FlipPage from 'react-flip-page';
import '../App.css';
import Nav from "./Header";
import BookShelfNew from './BookShelfNew';
import SearchBig from './landing/SearchBig';
import BookShelfControl from './BookShelfControl';

class Create extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      value: '',
      valueBody: '',
      file: '',
      imagePreviewUrl: '',
      key: 1
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

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleChangeBody(e) {
    this.setState({ valueBody: e.target.value });
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img style={{ width: '1280px', height: '720px' }} src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Preview your book here as you create and write using the menu to the left</div>);
    }
    return (
      <div className="container-fluid">
        <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'><Nav /></div></div>
        <div className='row darkWood' style={{ marginTop: '7%'}}>

          <div className='col-sm-3 col-md-3 col-lg-3' style={{ marginTop: '1%', marginLeft: '5%' }}> {/* left side controls */}

            <div className='container-fluid'><div className='row'><div className='col-sm-12 col-md-12 col-lg-12'>

              <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example" className='tabsClass'>
                <Tab eventKey={1} title="Title & Cover Art">
                  <div className='container-fluid whiteBG'>
                    <div className='row'>
                      <div className='row'><div className='col-sm-12 col-md-12 col-lg-12' style={{ textAlign: 'left', textColor: 'white' }}>
                        <form style={{ margin: '10%' }}>
                          <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                            <ControlLabel>New Title:</ControlLabel>
                            <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} />
                            <FormControl.Feedback />
                          </FormGroup>
                        </form>
                      </div></div>
                      <div className='row' style={{ marginTop: '2%' }}><div className='col-sm-12 col-md-12 col-lg-12'><h4 style={{ marginLeft: '5%' }}> Add Cover Art </h4><img alt="" className="img-responsive" src={require("../img/icon_img.png")} style={{ marginLeft: '3%', position: 'relative', height: '20%', width: '20%' }} /></div></div>
                      <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'>
                        <div className="previewComponent">
                          <form onSubmit={(e) => this._handleSubmit(e)}>
                            <input className="fileInput"
                              type="file"
                              onChange={(e) => this._handleImageChange(e)} />
                            <button className="submitButton"
                              type="submit"
                              onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                          </form>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey={2} title="Continue writing">
                  <div className='container-fluid whiteBG'>
                  <div className='row'><div className='col-sm-12 col-md-12 col-lg-12' style={{ textAlign: 'center' }}>
                    <FormGroup controlId="formBasicText" validationState={this.getValidationStateBody()}>
                      <ControlLabel>Continue Writing Here:</ControlLabel>
                      <FormControl componentClass="textarea" rows={30} value={this.state.valueBody} placeholder="Enter text" onChange={this.handleChangeBody} />
                      <FormControl.Feedback />
                    </FormGroup>
                  </div></div></div>
                </Tab>
                <Tab eventKey={3} title="Edit pages">
                  <div className='container-fluid whiteBG'>
                  edit pages array 1,2,3... on select retrieve page information redirect to continue writing tab redirect flipbook to page
                  </div>
                </Tab>
                <Tab eventKey={4} title="**" disabled>
                  ***
                </Tab>
              </Tabs>

            </div></div></div>
          </div>

          <div className='col-sm-8 col-md-8 col-lg-8'> { /* right side preview */}

            <div className='container'>
              <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'><h1 className="whiteBG" style={{ textAlign: 'center'}}>{this.state.value}</h1></div></div>
              <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-12' style={{marginBottom: '5%'}}>
                  <FlipPage flipOnTouch='true' loopForever='true' height='720' width='1280px' orientation='horizontal' uncutPages='true' maxAngle='65' animationDuration='400'>
                    <article>
                      <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'>
                        <div className="imgPreview img-responsive">{$imagePreview}</div>
                      </div>
                      </div>
                    </article>
                    <article>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-sm-6 col-md-6 col-lg-6'>

                          </div>
                          <div className='col-sm-6 col-md-6 col-lg-6'>
                            <p>{this.state.valueBody}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article>
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-6 col-md-6 col-lg-6"> {/* page 1 */}
                            <h1>My awesome 1 article</h1>
                            <p>My awesome 1 content</p>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6"> {/* page 2 */}
                            <h1>My awesome 2 article</h1>
                            <p>My awesome 2 content</p>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article>
                      <div className='row'>
                        <div className='col-sm-6 col-md-6 col-lg-6'>
                          <h1>definition synopsis</h1>
                          <p>definition synopis</p>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-6'>
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
        </div>

        <div className="row"><div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
          <BookShelfControl/>
          <BookShelfNew />
        </div></div>


      </div>
    )
  }
}

export default Create;
