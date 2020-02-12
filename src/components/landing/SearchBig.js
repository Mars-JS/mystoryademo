import React, {Component} from 'react';
import {Jumbotron, FormGroup, FormControl, Modal, Button} from 'react-bootstrap';
import '../../App.css';

class SearchBig extends Component {
    constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  render(){
    return(
    <div className='container-fluid'>
    <div className="row largeSearchBar container-fluid centerVertical">
          
            
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 landingButton' onClick={this.handleShow}>SEARCH GENRES</div>
            
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
            <FormGroup id="searchhome" className="has-feedback searchBarLg">
              <FormControl id="searchtext" type="text" placeholder="Search Mystorya" />
              <i className="glyphicon glyphicon-search form-control-feedback"></i>
            </FormGroup>{' '}
            </div>
            
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 landingButton'>OUR PLATFORM</div>
            
        
    </div>
        <Modal bsSize="large" show={this.state.show} onHide={this.handleClose} bsClass='modal'>
        <Modal.Header closeButton>
          <Modal.Title className='font3'>Search by genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
              <div className='container'><div className='row'>
                
                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="life" value="life" /> 
                    <genretext className='fontCheckBox'>Travel</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="friends" value="friends" />
                    <genretext className='fontCheckBox'>Friends</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="family" value="family" />
                    <genretext className='fontCheckBox'>Family</genretext></div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="music" value="music" />
                  <genretext className='fontCheckBox'>Music</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="sports" value="sports" />
                  <genretext className='fontCheckBox'>Sports</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="technology" value="technology" />
                  <genretext className='fontCheckBox'>Technology</genretext></div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="education" value="education" /><genretext className='fontCheckBox'>Education</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="science" value="science" /> <genretext className='fontCheckBox'>Food</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="autmobiles" value="automobiles" /><genretext className='fontCheckBox'>Cars</genretext></div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Animals</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Fiction</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Military</genretext></div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="education" value="education" /> <genretext className='fontCheckBox'>Robotics</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="science" value="science" /> <genretext className='fontCheckBox'>Artificial Intelligence</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="autmobiles" value="automobiles" /> <genretext className='fontCheckBox'>Aircraft</genretext></div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Motor Sports</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Plants</genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Science</genretext></div>
                </div>
                
                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>History </genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Games </genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Fantasy </genretext></div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Autobiography </genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Popular </genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Random </genretext></div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>High school </genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>College </genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Architecture </genretext></div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Space </genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Physics </genretext></div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input className='genreCheckBox' type="checkbox" name="fiction" value="fiction" /><genretext className='fontCheckBox'>Motorcycles </genretext></div>
                </div>

              </div></div>
            </form>
            
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" className='blueSearchBtn' value="Submit">Search</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
}

export default SearchBig;
