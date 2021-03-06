import React, { Component } from 'react';
import { Alert, Button, Glyphicon, FormGroup, ControlLabel, FormControl, Tabs, Tab } from "react-bootstrap";
import FlipPage from 'react-flip-page';
import SelectPage from './SelectPage';
import SelectPageType from './SelectPageType';
import SearchBig from './landing/SearchBig';
import CreateFlip from './CreateFlip';

class Create extends Component {
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
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img style={{ width: '480px', height: '270px' }} src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText" style={{ width: '480px', height: '270px' }}>Preview cover art, add image using menu below</div>);
        }
        
            return (
                <div className='container-fluid'><div className='row'>

                    <div className='row formRow'><div className='col-sm-12 col-md-12 col-lg-12'>

                        <div className='row' > {/* title input*/}
                                <div className='col-sm-6 col-md-6 col-lg-6'>
                                    <form>
                                        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                                            <ControlLabel><span className='font2'>New Title:</span></ControlLabel>
                                            <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} />
                                            <Button className="uploadButton" type="submit" onClick={(e) => this._handleSubmit(e)}>Update Title</Button>
                                            <FormControl.Feedback />
                                        </FormGroup>
                                    </form>
                                </div>
                                <div className='col-sm-6 col-md-6 col-lg-6'></div>
                            </div>
                            <div className='row'> {/* cover art input */}
                                <div className='col-sm-3 col-md-3 col-lg-3'>
                                    <div className='row' style={{ marginLeft: '-1px', marginTop: '1%'}}><span className='font2'>Add cover art:</span></div>
                                    <div className='row imgPrev'>{$imagePreview}</div>
                                    <div className="previewComponent">
                                        <form onSubmit={(e) => this._handleSubmit(e)} style={{ marginLeft: '14px', marginBottom: '6%' }}>
                                            <input className="fileInput" style={{marginBottom: '5%'}}
                                                type="file"
                                                onChange={(e) => this._handleImageChange(e)} />
                                            <Button className="uploadImgButton"
                                                type="submit"
                                                onClick={(e) => this._handleSubmit(e)}>Upload Image</Button>
                                        </form>
                                    </div>
                                </div></div>
                            <div className='row' style={{marginBottom: '2%'}}> {/* share settings */}
                                <div className='col-sm-12 col-md-12 col-lg-12'>
                                <span className='font2'>Share:</span>
                                            <form>
                                            <div className='container'><div className='row'>
     
                                                <div className='row'>
                                                <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                                <input className='genreCheckBox' type="checkbox" name="private" value="private" /> <span className='font6'>Private</span></div>
                                                </div>                                                
                                                <div className='row'>
                                                <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                                <input className='genreCheckBox' type="checkbox" name="friendsNfamily" value="friendsNfamily" /> <span className='font6'>Friends + Family</span></div>
                                                </div>
                                                <div className='row'>
                                                <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                                <input className='genreCheckBox' type="checkbox" name="world" value="world" /> <span className='font6'>The World</span></div>
                                                </div>

                                            </div></div>
                                            </form>
                            </div></div>
                    </div></div>

                    
                </div></div>
            );
        
    }

    renderMenuLg() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img style={{ width: '1280px', height: '720px' }} src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText" style={{ width: '1280px', height: '720px' }}>Preview your story here as you create</div>);
        } 
        if (this.state.show) {
            return (

                <div className='row mainCreateRow'>
                <Button onClick={this.handleDismiss} className="hideButton">Show FlipPage (click)</Button>
                <div className='container-fluid'>
                    <div className='row'> {/* title */}
                        <div className='col-sm-12 col-md-12 col-lg-12'>
                            {/* <h1 style={{ marginLeft: '14%', width: '1280px', color: 'black', backgroundColor: 'white', textAlign: 'center'}}>{this.state.value}</h1> */}
                            <h1 className='bookTitleCreate'>{this.state.value}</h1>
                    </div></div>
                <div className='row createStory' ><div className='col-sm-12 col-md-12 col-lg-12'>
                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                    <div className='formRenderMenu'>{this.renderMenu()}</div>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                        <div className='row selectPageMenu'><SelectPageType /></div>
                    </div>
                </div></div>
                <div className='container'><div className='row createButtonRow' style={{marginTop: '-5%'}}>
                    <div className="col-sm-4 col-md-4 col-lg-4"><button className='createBtn'>Save</button></div>
                    <div className="col-sm-4 col-md-4 col-lg-4"><button className='createBtn'>Edit</button></div>
                    <div className="col-sm-4 col-md-4 col-lg-4"><button className='createFbBtn'>Share on facebook</button></div>
                 </div></div>
                </div> {/* container-fluid end */}
                </div>

            )
        }else{
        return (
        <div className='row mainCreateRow'>
            <Button className="hideButton" style={{ backgroundColor: 'black', color: 'white', marginTop: '1%' }} onClick={this.handleShow}>Update cover & title (click)</Button>
                <div className='row'> {/* title */}
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        {/* <h1 style={{ marginLeft: '14%', width: '1280px', color: 'black', backgroundColor: 'white', textAlign: 'center'}}>{this.state.value}</h1> */}
                    <h1 className='bookTitleCreate'>{this.state.value}</h1>
                </div></div>
            <div className='createFlip'>
                <FlipPage flipOnTouch='true' loopForever='true' height='720' width='1280' orientation='horizontal' uncutPages='true' maxAngle='65' animationDuration='450' fluid='true'>
                    <article> {/* cover page */}
                        <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'>
                            <div className="imgPreview img-responsive">{$imagePreview}</div>
                        </div>
                        </div>
                    </article>
                            <article>
                                <img className="img-responsive" src={require("../img/rihannaPage0.jpg")}/>
                            </article>
                            <article>
                                <div className="container">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <h1 className='font3'>Chapter 1</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <p />
                                                    <p />
                                                    <p />
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </p>
                                                    <p>
                                                        Consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat.
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                      
                                                    </p>
                                                </div>
                                                <div className='row'>
                                                    <div className="col-sm-4 col-md-8 col-lg-12">
                                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0RyInjfgNc4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </article>
             
                        </FlipPage>
            </div>
        </div>);}
    }

    render() {
       
        return (
            <div className="container-fluid">
                <div id="spacer" className="row spacerRow"></div>
                {this.renderMenuLg()}
                <SearchBig />

                <div className='container-fluid'>
                    {/* preview pages stuff */}
                    <div className='font3'>Storybook Preview</div>
                    <div className='row' style={{ marginTop: '2%' }}>

                        <div className="col-sm-3 col-md-3 col-lg-3">{/* <div className='pageNo1'>Page 1</div><div className='pageNo2'>Page 2</div> */}
                            <div className='row pagePreview'>
                                <div className='containerPreview'>
                                    <img alt="" className="img-responsive" src={require("../img/prev8.png")} />
                                    <div className='overlayPreview'>
                                        <div className='textEditHover font10'>EDIT</div><div className='pageNo1hover'>Page 1</div><div className='pageNo2hover'>Page 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">{/* <div className='pageNo1'>Page 3</div><div className='pageNo2'>Page 4</div> */}
                            <div className='row pagePreview'>
                                <div className='containerPreview'>
                                    <img alt="" className="img-responsive" src={require("../img/prev1.png")} />
                                    <div className='overlayPreview'>
                                        <div className='textEditHover font10'>EDIT</div><div className='pageNo1hover'>Page 3</div><div className='pageNo2hover'>Page 4</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">{/* <div className='pageNo1'>Page 5</div><div className='pageNo2'>Page 6</div> */}
                            <div className='row pagePreview'>
                                <div className='containerPreview'>
                                    <img alt="" className="img-responsive" src={require("../img/prev2.png")} />
                                    <div className='overlayPreview'>
                                        <div className='textEditHover font10'>EDIT</div><div className='pageNo1hover'>Page 5</div><div className='pageNo2hover'>Page 6</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">{/* <div className='pageNo1'>Page 7</div><div className='pageNo2'>Page 8</div> */}
                            <div className='row pagePreview'>
                                <div className='containerPreview'>
                                    <img alt="" className="img-responsive" src={require("../img/prev3.png")} />
                                    <div className='overlayPreview'>
                                        <div className='textEditHover font10'>EDIT</div><div className='pageNo1hover'>Page 7</div><div className='pageNo2hover'>Page 8</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row' style={{ marginTop: '2%', marginBottom: '4%' }}>
                        <div className="col-sm-3 col-md-3 col-lg-3">{/* <div className='pageNo1'>Page 9</div><div className='pageNo2'>Page 10</div> */}
                            <div className='row pagePreview'>
                                <div className='containerPreview'>
                                    <img alt="" className="img-responsive" src={require("../img/prev4.png")} />
                                    <div className='overlayPreview'>
                                        <div className='textEditHover font10'>EDIT</div><div className='pageNo1hover'>Page 9</div><div className='pageNo2hover'>Page 10</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">{/* <div className='pageNo1'>Page 11</div><div className='pageNo2'>Page 12</div> */}
                            <div className='row pagePreview'>
                                <div className='containerPreview'>
                                    <img alt="" className="img-responsive" src={require("../img/prev5.png")} />
                                    <div className='overlayPreview'>
                                        <div className='textEditHover font10'>EDIT</div><div className='pageNo1hover'>Page 11</div><div className='pageNo2hover'>Page 12</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">{/* <div className='pageNo1'>Page 13</div><div className='pageNo2'>Page 14</div> */}
                            <div className='row pagePreview'>
                                <div className='containerPreview'>
                                    <img alt="" className="img-responsive" src={require("../img/prev6.png")} />
                                    <div className='overlayPreview'>
                                        <div className='textEditHover font10'>EDIT</div><div className='pageNo1hover'>Page 13</div><div className='pageNo2hover'>Page 14</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">{/* <div className='pageNo1'>Page 15</div><div className='pageNo2'>Page 16</div> */}
                            <div className='row pagePreview'>
                                <div className='containerPreview'>
                                    <img alt="" className="img-responsive" src={require("../img/prev7.png")} />
                                    <div className='overlayPreview'>
                                        <div className='textEditHover font10'>EDIT</div><div className='pageNo1hover'>Page 15</div><div className='pageNo2hover'>Page 16</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Create;
