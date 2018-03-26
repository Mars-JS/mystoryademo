import React, { Component } from "react";
import { Button, Glyphicon, Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        
        this.state = {
            show: false,
            navScroll: 'transparent',
            logoColor: require("../img/logoWhite.png")
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
        this.setState({ show: false });
        if (window.scrollY<50){
            this.setState({ logoColor: require("../img/logoWhite.png") })
            this.setState({ navScroll: 'transparent' })
        }else{
            this.setState({ navScroll: 'white' })
            this.setState({ logoColor: require("../img/logoBlue.png") })
        }
        /* console.log(this.state.navScroll); */
    }

    handleDismiss() {
        this.setState({ show: false });
        if (window.scrollY !== 0)this.setState({ navScroll: 'white' });
        /* if (this.state.navScroll=='transparent'&& window.scrollY !== 0)this.setState({ navScroll: 'white' }); */
    }

    handleShow() {
        if (window.scrollY > 49) this.setState({ navScroll: 'transparent' });
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
                    
                    <div className='row' style={{marginTop: '1%'}}>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px', marginLeft: '-104%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-log-out' /> Logout</Button>
                    </div>
                    <div className='row'>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px', marginLeft: '-104%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-user' /> Profile</Button>
                    </div>
                    <div className='row'>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px', marginLeft: '-104%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-edit' /> My Stories</Button>
                    </div>
                    <div className='row'>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px', marginLeft: '-104%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-option-vertical' /> Friends</Button>
                    </div>
                    <div className='row'>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px', marginLeft: '-104%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-bookmark' /> Bookmarks</Button>
                    </div>
                    <div className='row'>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px', marginLeft: '-104%' }}>
                            <Glyphicon glyph='glyphicon glyphicon-book' /> Create New</Button>
                    </div>
                    
                </div>
            );
        }
        return (
            <div className='container-fluid'><div className='row'>
                <img src={require("../img/menuHam2.png")}
                    className="menuHam2"
                    onClick={this.handleShow} alt="logo" />
            </div></div>
        );

    }
    render() {
        return (
            
            <div className='container-fluid'><div className='row'>
                <div>
                <Navbar fixedTop='true' fluid='true' href='nav'
                        style={{ background: this.state.navScroll, border: '1px transparent'}}>
                    <Navbar.Header>
                        <Nav>
                                <a href="/"><img style={{height:'100px'}} className='img-responsive logoBlue' src={this.state.logoColor} alt="logo" />
                                        {/* <img className='img-responsive logoBlue' src={require("../img/logoBlue.png")} alt="logo" /> */}
                                        {/* <img className='img-responsive ' src={require("../img/logoText.png")} alt="logo" /> */}
                            </a>
                        </Nav>
                    </Navbar.Header>
                    <Nav pullRight>
                        <Navbar.Toggle />
                            <Navbar.Collapse >
                            <Navbar.Form >
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
