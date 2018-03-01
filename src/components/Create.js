import React, { Component } from 'react';
import Nav from "./Header";
import ProfileBookShelf from './ProfileBookShelf'
import Search from './landing/Search';
import { Carousel, Glyphicon } from "react-bootstrap";
import '../App.css';
class Create extends Component {

    render(){
        return(
          <div className="container-fluid">
            <Nav/>
            <br/>
            <br/>
            <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
            <Carousel className="carousel" style={{ height: "480px", width: "1054px", marginTop: '8%', marginBottom: '2%',marginLeft: '11%' }} interval="15000">
              <Carousel.Item id="coverPage">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 createSlider" style={{ height: "480px", width: "1054px"}}>
                    <div className="row createGlyphicons">
                      <div className="col-sm-6 col-md-6 col-lg-6 glyphCross">
                        <div className="row">
                          <div className="col-sm-2 col-md-2 col-lg-2">
                            <Glyphicon glyph="picture" style={{fontSize: '4em'}} />
                          </div>
                          <div className="col-sm-2 col-md-2 col-lg-2 glyph">
                            <Glyphicon glyph="play-circle" style={{fontSize: '4em'}}/>
                          </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="row">
                          <div className="col-sm-4 col-md-4 col-lg-2">
                            <Glyphicon glyph="record" style={{fontSize: '4em'}}/>
                          </div>
                          <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                            <Glyphicon glyph="text-width" style={{fontSize: '4em'}}/>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 glyphCross">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 col-lg-2">
                            <Glyphicon glyph="picture"  style={{fontSize: '4em'}}/>
                          </div>
                          <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                            <Glyphicon glyph="play-circle" style={{fontSize: '4em'}}/>
                          </div>
                      </div>
                      <br/>
                      <br/>
                      <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-2">
                          <Glyphicon glyph="record" style={{fontSize: '4em'}}/>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                          <Glyphicon glyph="text-width" style={{fontSize: '4em'}}/>
                        </div>
                    </div>
                      </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row createGlyphicons">
                      <div className="col-sm-6 col-md-6 col-lg-6 glyphCross">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 col-lg-2">
                            <Glyphicon glyph="picture" style={{fontSize: '4em'}}/>
                          </div>
                          <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                            <Glyphicon glyph="play-circle" style={{fontSize: '4em'}}/>
                          </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="row">
                          <div className="col-sm-4 col-md-4 col-lg-2">
                            <Glyphicon glyph="record" style={{fontSize: '4em'}}/>
                          </div>
                          <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                            <Glyphicon glyph="text-width" style={{fontSize: '4em'}}/>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 glyphCross">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 col-lg-2">
                            <Glyphicon glyph="picture" style={{fontSize: '4em'}}/>
                          </div>
                          <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                            <Glyphicon glyph="play-circle" style={{fontSize: '4em'}}/>
                          </div>
                      </div>
                      <br/>
                      <br/>
                      <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-2">
                          <Glyphicon glyph="record" style={{fontSize: '4em'}}/>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-2 glyph">
                          <Glyphicon glyph="text-width" style={{fontSize: '4em'}}/>
                        </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
            </div>
            </div>
          <div className="row">
            <Search/>
            <ProfileBookShelf />
          </div>
        </div>

        )
    }
}
export default Create;
