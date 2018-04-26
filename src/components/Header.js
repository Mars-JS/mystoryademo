import React, { Component } from "react";
import { Alert, Button, Glyphicon, Navbar, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
import Search from './landing/Search';


class Header extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        
        this.state = {
            show: false,
            navScroll: 'transparent'
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll(event) {
        // access window.scrollY etc
        let y = window.scrollY;
        if (y<50){
            this.setState({ navScroll: 'transparent' })
        }else{
            this.setState({ navScroll: 'white' })
        }
        /* console.log(this.state.navScroll); */
        /* console.log(y); */
    }

    handleDismiss() {
        this.setState({ show: false });
        if (this.state.navScroll=='transparent')this.setState({ navScroll: 'white' })
    }

    handleShow() {
        this.setState({ navScroll: 'transparent' })
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
        let styles = this.state.navScroll;
        let {navStyle} = styles;
        return (
            <div className='container-fluid'><div className='row'>
                <div className={navStyle}>
                <Navbar fixedTop='true' fluid='true' href='nav'
                        style={{ background: this.state.navScroll, border: '0px', paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', paddingBottom: '30px'}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/"><img className='img-responsive mysLogo' src={require("../img/mysLogo00.png")} alt="logo" /></a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Navbar.Form>
                                {this.renderMenuHam()}
                            </Navbar.Form>
                        </Navbar.Collapse>
                    </Nav>
                </Navbar>
                </div>
            </div></div>
        )
    }
}
export default Header;
