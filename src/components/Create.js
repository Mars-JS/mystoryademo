import React, { Component } from 'react';
import Nav from "./Header";
import ProfileBookShelf from './ProfileBookShelf'
import SearchBig from './landing/SearchBig';
import { Carousel, Glyphicon } from "react-bootstrap";
import '../App.css';

class Create extends Component {

    render(){
        return(
          <div className="container-fluid centerDiv" style={{ marginTop: '10%' }}>
            <Nav/>

                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12" style={{ height: "720px", width: "1280px"}}>
                      <div className="row createGlyphicons">
                        <div className="col-sm-6 col-md-6 col-lg-6 glyphCross">
                          <div className="row">
                            <div className="col-sm-2 col-md-2 col-lg-2">
                              <Glyphicon glyph="picture" style={{fontSize: '6em'}} />
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2 glyph">
                              <Glyphicon glyph="play-circle" style={{fontSize: '6em'}}/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-2">
                              <Glyphicon glyph="record" style={{fontSize: '6em'}}/>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                              <Glyphicon glyph="text-width" style={{fontSize: '6em'}}/>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 glyphCross">
                          <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-2">
                              <Glyphicon glyph="picture"  style={{fontSize: '6em'}}/>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                              <Glyphicon glyph="play-circle" style={{fontSize: '6em'}}/>
                            </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4 col-md-4 col-lg-2">
                            <Glyphicon glyph="record" style={{fontSize: '6em'}}/>
                          </div>
                          <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                            <Glyphicon glyph="text-width" style={{fontSize: '6em'}}/>
                          </div>
                      </div>
                        </div>
                      </div>
                      <div className="row createGlyphicons">
                        <div className="col-sm-6 col-md-6 col-lg-6 glyphCross">
                          <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-2">
                              <Glyphicon glyph="picture" style={{fontSize: '6em'}}/>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                              <Glyphicon glyph="play-circle" style={{fontSize: '6em'}}/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-2">
                              <Glyphicon glyph="record" style={{fontSize: '6em'}}/>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                              <Glyphicon glyph="text-width" style={{fontSize: '6em'}}/>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 glyphCross">
                          <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-2">
                              <Glyphicon glyph="picture" style={{fontSize: '6em'}}/>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                              <Glyphicon glyph="play-circle" style={{fontSize: '6em'}}/>
                            </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4 col-md-4 col-lg-2">
                            <Glyphicon glyph="record" style={{fontSize: '6em'}}/>
                          </div>
                          <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                            <Glyphicon glyph="text-width" style={{fontSize: '6em'}}/>
                          </div>
                      </div>
                        </div>
                      </div>

              </div>
            </div>
          <div className="row">
            <SearchBig/>
            <ProfileBookShelf />
          </div>
        </div>

        )
    }
}
export default Create;
