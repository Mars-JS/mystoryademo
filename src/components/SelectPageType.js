import React, { Component } from "react";
import { Button, Glyphicon, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import SelectPage from './SelectPage';
import SelectPageFull from './SelectPageFull';

class SelectPageType extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelected = this.handleSelected.bind(this);

        this.state = {
            isSelected: ''
        };
    }
    renderContent() {

        switch (this.state.isSelected) {
            case null:
                return;
            case 'fullPage':
                return [
                    <div className='container'><div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div className='row' style={{ marginLeft: '-10%', marginTop: '1%' }}>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                                <Button onClick={this.handleSelected} value=''><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
                            </div></div>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                                <SelectPageFull />
                            </div></div>
                        </div></div>
                    </div>
                ];
            case 'halfPage':
                return [
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                                <Button onClick={this.handleSelected} value=''><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
                            </div></div>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                                <SelectPage />
                            </div></div>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                                <SelectPage />
                            </div></div>
                        </div>
                ];
            default:
                return [
                    <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 containerText' style={{ width: '630px', height: '710px' }}>
                            {/* <img alt="" className="crossImg img-responsive" src={require("../img/cross2.png")} /> */}
                            <div className="row pageSelect"><Button onClick={this.handleSelected} value='fullPage'>full page</Button></div>
                            <div className="row pageSelect"><Button onClick={this.handleSelected} value='halfPage'>half page</Button></div>
                        </div></div></div>
                ];
        }
    }

    handleSelected(e) {
        this.setState({ isSelected: e.target.value });
        console.log(this.state.isSelected)
    }

    render() {
        return (
            <div className='container-fluid'><div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>

                    {this.renderContent()}
                
            </div></div></div>
        );
    }
}

export default SelectPageType;
