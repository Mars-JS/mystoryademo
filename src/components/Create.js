import React, { Component } from 'react';
import { Alert, Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import FlipPage from 'react-flip-page';
import SelectPage from './SelectPage';

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
        if (this.state.show) {
            return (
                <div>
                    <Button onClick={this.handleDismiss} className="hideButton">Hide the update menu (click)</Button>
                    <div className='container'><div className='row' style={{ backgroundColor: 'lightgrey', width: '400px' }}>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <Alert bsStyle="" onDismiss={this.handleDismiss}>
                            <div className='row' >
                                <div className='row'>
                                <div className='col-sm-12 col-md-12 col-lg-12'>
                                    <form >
                                        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                                            <ControlLabel>New Title:</ControlLabel>
                                            <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} />
                                            <Button className="uploadButton" type="submit" onClick={(e) => this._handleSubmit(e)}>Update Title</Button>
                                            <FormControl.Feedback />
                                        </FormGroup>
                                    </form>
                                </div></div>
                                    <div className='row' style={{marginBottom: '1%'}}>
                                    <div className='col-sm-12 col-md-12 col-lg-12'>
                                            <div className='row' style={{ marginLeft: '1%' }}><strong>Add cover art:</strong></div>
                                        <div className="previewComponent">
                                            <form onSubmit={(e) => this._handleSubmit(e)}>
                                                <input className="fileInput2"
                                                    type="file"
                                                    onChange={(e) => this._handleImageChange(e)} />
                                                <Button className="uploadImgButton2"
                                                    type="submit"
                                                    onClick={(e) => this._handleSubmit(e)}>Upload Image</Button>
                                            </form>
                                        </div>
                                    </div></div>
                                <div className='row'>
                                <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <div className='container'>
                                            <Button className="uploadButton22">Share with</Button>
                                            <form>
                                                <input type="checkbox" name='share' value="friends" />friends
                                                <input type="checkbox" name='share' value="family" />family
                                                <input type="checkbox" name='share' value="friends" />world
                                            </form>
                                        </div>
                                        <div className='container'>
                                            <form>                                            
                                                <Button className="uploadButton22">Share this page</Button>
                                                <div className='row'>
                                                    <input type="checkbox" name='share' value="friends" />friends
                                                    <input type="checkbox" name='share' value="family" />family
                                                    <input type="checkbox" name='share' value="friends" />facebook
                                                </div>
                                                <div className='row'>
                                                    <input type="checkbox" name='share' value="friends" />instagram
                                                    <input type="checkbox" name='share' value="family" />twitter
                                                    <input type="checkbox" name='share' value="friends" />google+
                                                </div>
                                            </form>
                                        </div>
                                </div></div>
                            </div>
                        </Alert>
                    </div></div></div>
                </div>
            );
        }
        return (<div className='container'><Button className="hideButton" style={{ backgroundColor: 'black', color: 'white', marginTop: '1%' }} onClick={this.handleShow}>Update cover & title (click)</Button></div>);
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img style={{ width: '1280px', height: '720px' }} src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText" style={{ width: '1280px', height: '720px'}}>Create your story here, add a title and cover image then swipe to the next page</div>);
        }
        return (
            <div className="container-fluid">
                <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'></div></div>
                <div className='row darkWood' style={{ marginTop: '7%' }}>
                    <div className='container-fluid'>
                        
                        <div className='row flip' style={{ marginBottom: '1%', marginLeft: '50px' }}>
                            <div className='row'>
                                <div className='col-sm-12 col-md-12 col-lg-12'><h1 className="whiteBG" style={{ width: '1280px', textAlign: 'center' }}>{this.state.value}</h1></div></div>    
                            <div className='row'>
                            <div className='col-sm-6 col-md-6 col-lg-6'>
                            <FlipPage pageBackground='#fff' flipOnTouch='true' loopForever='true' height='720' width='1280' orientation='horizontal' uncutPages='true' maxAngle='65' animationDuration='400' showSwipeHint='true' threshhold='800'>

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
                                                    <div className='row' >
                                                        <div className='col-sm-12 col-md-12 col-lg-12'>
                                                            <SelectPage />
                                                        </div></div>
                                                    <div className='row' >
                                                        <div className='col-sm-12 col-md-12 col-lg-12'>
                                                            <SelectPage />
                                                        </div></div>
                                                </div>

                                                <div className='col-sm-6 col-md-6 col-lg-6'> {/* page 2 */}
                                                        <div className='row' style={{ marginTop: '10px' }}>
                                                        <div className='col-sm-12 col-md-12 col-lg-12'>
                                                        <textarea rows='30' cols='80'> </textarea>
                                                        </div></div>
                                                        <div className='row' style={{marginTop: '25px'}} >
                                                            <div className='col-sm-6 col-md-6 col-lg-6'></div>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <Button className="uploadButton22">Share Page</Button>
                                                            </div>
                                                            <div className='col-sm-3 col-md-3 col-lg-3'>
                                                                <Button className="uploadButton22">Save Page</Button>
                                                            </div>
                                                            </div>
                                                </div>

                                            </div></div>
                                    </article>

                                        <article >
                                            <div className='container'>
                                                <div style={{ textAlign: 'left', left: '5%', bottom: '-25px', position: 'absolute' }}>page 1</div>
                                                <div style={{ textAlign: 'right', right: '5%', bottom: '-25px', position: 'absolute' }}>page 2</div>
                                                <div className='row'>

                                                    <div className='col-sm-6 col-md-6 col-lg-6'> {/* page 1 */}
                                                        <div className='row'><div className='col-sm-12 col-md-12 col-lg-12'>
                                                            <p className='font4'>sample title</p>
                                                            <img alt="" className="img-responsive pictureShadow" src={require("../img/rihannaPage2.jpg")} />
                                                        </div></div>
                                                        <div className='row' >
                                                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                                                <SelectPage />
                                                            </div></div>
                                                    </div>

                                                    <div className='col-sm-6 col-md-6 col-lg-6'> {/* page 2 */}
                                                        <div className='container-fluid'>

                                                            <div className="container"><div className='row' style={{ marginTop: '1%' }}>
                                                                <div className='col-sm-12 col-md-12 col-lg-12'>
                                                                    <p style={{ textAlign: 'left', marginRight: '54%' }}>
                                                                        Nibh praesent tristique magna sit amet purus. Ut faucibus
                                                                    integer. Volutpat commodo sed egestas egestas fringilla phasellus
                                                                    faucibus scelerisque.Euismod in pellentesque massa placerat duis
                                                                    ultricies lacus sed turpis. Ut tortor pretium viverra suspendisse
                                                                    potenti nullam ac. Mauris pellentesque pulvinar pellentesque
                                                                    habitant morbi tristique senectus et netus. Libero enim sed
                                                                    faucibus turpis. Orci ac auctor augue mauris. A condimentum
                                                                    vitae sapien pellentesque. Amet facilisis magna etiam tempor orci.
                                                           Orci dapibus ultrices in iaculis nunc sed augue lacus.</p></div></div></div>

                                                            <div className="container"> <div className='row' style={{ marginTop: '1%' }}>
                                                                <div className='col-sm-12 col-md-12 col-lg-12'>
                                                                    <p style={{ textAlign: 'left', marginRight: '54%' }}>Massa
                                                                    sollicitudin aliquam ultrices sagittis orci a scelerisque
                                                                    purus. Quisque sagittis purus sit amet volutpat consequat.
                                                                    Vel fringilla est ullamcorper eget nulla. Duis tristique
                                                                    sollicitudin nibh sit amet commodo nulla. Odio aenean sed
                                                                    adipiscing diam donec adipiscing tristique risus nec.
                                                                    Etiam erat velit scelerisque in dictum non consectetur a.
                                                          Neque ornare aenean euismod elementum. </p></div></div></div>
                                                        </div>

                                                        <div className="container-fluid">
                                                            <div className='row' style={{ marginLeft: "7%", marginTop: "1%" }}>
                                                                <div className="col-sm-4 col-md-8 col-lg-12">
                                                                    <p className='font4'>Rihanna- Love On The Brain</p>
                                                                    <iframe className='videoPlayer' height='320px' width='480px' src="https://www.youtube.com/embed/0RyInjfgNc4" />
                                                                </div></div></div>

                                                    </div>

                                                </div></div>
                                        </article>
                                </FlipPage>
                            </div>

                                <div className='col-sm-3 col-md-3 col-lg-3'></div>
                            <div className='col-sm-3 col-md-3 col-lg-3'>
                            {this.renderMenu()}</div>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
        )
    }
}

export default Create;

