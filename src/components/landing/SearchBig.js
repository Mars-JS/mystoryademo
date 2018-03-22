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
    <div style={{marginTop: '-8%'}}>
    <Jumbotron className="jumboSearch">
        <div className='container-fluid'><div className='row'>
          <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
          <FormGroup id="searchhome" className="has-feedback">
            <FormControl id="searchtext" type="text" placeholder="Search Mystorya" />
            <i className="glyphicon glyphicon-search form-control-feedback"></i>
          </FormGroup>{' '}
          </div>
          <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 whiteButton' onClick={this.handleShow}>SEARCH GENRES</div>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
        </div></div>
    </Jumbotron>
        <Modal bsSize="large" show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search by genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
              <div className='container'><div className='row'>
                
                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="life" value="life" /> Life</div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="friends" value="friends" /> Friends</div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="family" value="family" /> Family</div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="music" value="music" /> Music</div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="sports" value="sports" /> Sports</div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="technology" value="technology" /> Technology</div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="education" value="education" /> Education</div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="science" value="science" /> Science</div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="autmobiles" value="automobiles" /> Automobiles</div>
                </div>

                <div className='row'>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="fiction" value="fiction" /> Travel</div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="fiction" value="fiction" /> Fiction</div>
                  <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><input type="checkbox" name="fiction" value="fiction" /> Military</div>
                </div>

              </div></div>
            </form>
            
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" value="Submit">Search</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
}

export default SearchBig;
