import React, { Component } from "react";
import { Alert, Button, Glyphicon, Navbar, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
import Search from './landing/Search';


class HeaderNew extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
           show: false
        };
    }
    componentDidMount() {
        {
            document.documentElement.addEventListener('scroll', this.handleScroll);
        }
    }
    componentWillUnmount() {
        document.documentElement.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        this.refs.nav.getDOMNode().style.top = document.documentElement.scrollTop + 'px';
    }

    handleDismiss() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    renderMenuHam() {
        if (this.state.show) {
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <img src={require("../img/menuHam3.png")}
                            className="menuHam2"
                            onClick={this.handleDismiss} alt="logo" />            
                    </div>
                    <div className='row'>
                        <Button type="submit" className="btn blackButton" style={{ width: '128px', marginLeft: '50%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-log-out' /> Logout</Button>
                        </div>
                    <div className='row'>
                        <Button type="submit" className="btn blackButton" style={{ width: '128px', marginLeft: '50%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-user' /> Profile</Button>
                    </div>
                    <div className='row'>
                        <Button type="submit" className="btn blackButton" style={{ width: '128px', marginLeft: '50%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-edit' /> My Stories</Button>
                    </div>
                    <div className='row'>
                        <Button type="submit" className="btn blackButton" style={{ width: '128px', marginLeft: '50%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-option-vertical' /> Friends</Button>
                    </div>
                    <div className='row'>
                        <Button type="submit" className="btn blackButton" style={{ width: '128px', marginLeft: '50%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-bookmark' /> Bookmarks</Button>
                    </div>
                    <div className='row'>
                        <Button type="submit" className="btn blackButton" style={{ width: '128px', marginLeft: '50%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-book' /> Create New</Button>
                    </div>
                </div>
            );
        }
        return (
            <div className='container-fluid'><div className='row' >
                <img src={require("../img/menuHam2.png")} 
                className="menuHam2"
                onClick={this.handleShow} alt="logo" />
                </div></div>
                    );
            
    }
    render() {
        return (
            <div className='container-fluid'><div className='row navRow'>
                <Navbar fixedTop='true' fluid='true' href='nav' className={}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/"><img src={require("../img/mysLogo00.png")} alt="logo" /></a>
                        </Navbar.Brand>
                    </Navbar.Header>
                        <Nav pullRight>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Navbar.Form>
                                {this.renderMenuHam()}
                            </Navbar.Form>
                        </Navbar.Collapse>
                        </Nav>
                </Navbar>
            </div></div>
        )
    }
}
export default HeaderNew;