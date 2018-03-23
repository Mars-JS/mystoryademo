import React, { Component } from 'react';
import { Alert, Button, Glyphicon, FormGroup, ControlLabel, FormControl, Tabs, Tab } from "react-bootstrap";
import FlipPage from 'react-flip-page';
import SelectPage from './SelectPage';
import SelectPageType from './SelectPageType';

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
            $imagePreview = (<img style={{ width: '640px', height: '360px' }} src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText" style={{ width: '640px', height: '360px' }}>Preview cover art, add image using menu below</div>);
        }
        if (this.state.show) {
            return (
                <div className='container'><div className='row'><div className='col-sm-12 col-md-12 col-lg-12'>
                
                    <Button onClick={this.handleDismiss} className="hideButton" style={{ marginBottom: '1%', marginTop: '1%' }} >Hide the update menu (click)</Button>
                    <div className='row'>
                    {$imagePreview}</div>
                    <div className='container'><div className='row' style={{ border: '1px solid', marginLeft: '4%', marginTop: '1%', backgroundColor: 'lightslategrey', width: '480px' }}><div className='col-sm-12 col-md-12 col-lg-12'>
                        
                            <div className='row'>
                                <div className='col-sm-3 col-md-3 col-lg-3'>
                                    <div className='row' style={{ marginLeft: '-1px', marginTop: '1%'}}><strong>Add cover art:</strong></div>
                                    <div className="previewComponent">
                                        <form onSubmit={(e) => this._handleSubmit(e)} style={{ marginLeft: '14px' }}>
                                            <input className="fileInput"
                                                type="file"
                                                onChange={(e) => this._handleImageChange(e)} />
                                            <Button className="uploadImgButton"
                                                type="submit"
                                                onClick={(e) => this._handleSubmit(e)}>Upload Image</Button>
                                        </form>
                                    </div>
                                </div></div>
                                <div className='row'>
                                <div className='col-sm-6 col-md-6 col-lg-6'>
                                    <form >
                                        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                                            <ControlLabel>New Title:</ControlLabel>
                                            <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} />
                                            <Button className="uploadButton" type="submit" onClick={(e) => this._handleSubmit(e)}>Update Title</Button>
                                            <FormControl.Feedback />
                                        </FormGroup>
                                    </form>
                                </div>
                                <div className='col-sm-6 col-md-6 col-lg-6'></div>
                            </div>
                        
                    </div></div></div>

                </div></div></div>
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
            $imagePreview = (<div className="previewText" style={{ width: '1280px', height: '720px' }}>Preview your story here as you create</div>);
        }
        return (
            <div className="container-fluid">
                <div className='row darkWoodBG' style={{ marginTop: '4%' }}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12'>
                            <h1 style={{ marginLeft: '14%', width: '1280px', color: 'black', backgroundColor: 'white', textAlign: 'center'}}>{this.state.value}</h1>
                    </div></div>
                <div className='row createStory' ><div className='col-sm-12 col-md-12 col-lg-12'>
                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                    {this.renderMenu()}
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                        <SelectPageType />
                    </div>
                </div></div>
                </div>
                </div></div>
        )
    }
}

export default Create;
