import React, { Component } from "react";
import { Button, Glyphicon, Modal, Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleShowSearch = this.handleShowSearch.bind(this);
        this.handleCloseSearch = this.handleCloseSearch.bind(this);
        
        this.state = {
            show: false,
            navScroll: 'transparent',
            /* logoColor: require("../img/logoWhiteFullSm.png"), */
            logoColor: require("../img/logoWhite.png"),
            menuHamColor: require("../img/menuHamWhite.png"),
            searchColor: 'searchCSSwhite',
            showSearch: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        if(window.location.href === "http://localhost:3000/viewprofile") {
                // some code to load
                this.setState({ logoColor: require("../img/logoBlue.png") })
                this.setState({ searchColor: 'searchCSSblue' })
                this.setState({ menuHamColor: require("../img/menuHam2.png") })
                this.setState({ navScroll: 'white' })
            }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
    handleCloseSearch() {
        this.setState({ showSearch: false });
    }

    handleShowSearch() {
        this.setState({ showSearch: true });
    }

    handleScroll(event) {
            // access window.scrollY etc
            this.setState({ show: false });
            if(window.location.href === "http://localhost:3000/viewprofile") {
                // some code to load
                this.setState({ logoColor: require("../img/logoBlue.png") })
                this.setState({ searchColor: 'searchCSSblue' })
                this.setState({ menuHamColor: require("../img/menuHam2.png") })
                this.setState({ navScroll: 'white' })
            } else {

                if (window.scrollY<50){
                    this.setState({ navScroll: 'transparent' })
                    /* this.setState({ logoColor: require("../img/logoWhiteFullSm.png") }) */
                    this.setState({ logoColor: require("../img/logoWhite.png") })
                    this.setState({ menuHamColor: require("../img/menuHamWhite.png") })
                    this.setState({ searchColor: 'searchCSSwhite' })
                }else{
                    /* this.setState({ logoColor: require("../img/logoBlueFullSm.png") }) */
                    this.setState({ logoColor: require("../img/logoBlue.png") })
                    this.setState({ searchColor: 'searchCSSblue' })
                    this.setState({ menuHamColor: require("../img/menuHam2.png") })
                    this.setState({ navScroll: 'white' })
                }
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
    renderSearchModal(){
        return(
        <div>
        <div onClick={this.handleShowSearch} className='row' className={this.state.searchColor}></div>
        <Modal show={this.state.showSearch} onHide={this.handleCloseSearch} >
                    <Modal.Header closeButton>
                        <Modal.Title className='font3'>Search Mystorya</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container-fluid'><div className='row' style={{ margin: '1%'}}>   
                            <div className='row' style={{marginLeft: '15%'}}>
                                <textarea type="textarea" rows={1} cols={40} placeholder='Search Mystorya' autofocus='true' /><Button className='modalSearchBtn'>Search</Button>
                            </div>
                        </div></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='modalCloseBtn' onClick={this.handleCloseSearch}>Close</Button>
                    </Modal.Footer>
                </Modal>
        </div>
        );
    }
    renderMenuHam() {
        if (this.state.show) {
            return (
                <div className='container-fluid'>
                        <div className='row'>
                        {/* <img src={require("../img/menuHam3.png")}
                            className="menuHam2"
                            onClick={this.handleDismiss} alt="logo" /> */}
                        <img src={this.state.menuHamColor}
                            className="menuHam2"
                            onClick={this.handleDismiss} alt="logo" />
                    </div>
                    
                    <div className='row dropDownRow' style={{ marginTop: '2%' }}>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px' }}>
                            <Glyphicon glyph='glyphicon glyphicon-user' /> <a href='/viewprofile'> Profile</a></Button>
                    </div>
                    <div className='row dropDownRow'>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px' }}>
                            <Glyphicon glyph='glyphicon glyphicon-edit' /> My Stories</Button>
                    </div>
                    <div className='row dropDownRow'>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px' }}>
                            <Glyphicon glyph='glyphicon glyphicon-book' /> Create New</Button>
                    </div>
                    <div className='row dropDownRow'>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px' }}>
                            <Glyphicon glyph='glyphicon glyphicon-bookmark' /> Bookmarks</Button>
                    </div>
                    <div className='row dropDownRow'>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px' }}>
                            <Glyphicon glyph='glyphicon glyphicon-option-vertical' /> Friends</Button>
                    </div>
                    <div className='row dropDownRow'>
                        <Button type="submit" className="btn blueButton" style={{ width: '128px' }}>
                            <Glyphicon glyph='glyphicon glyphicon-log-out' /> Logout</Button>
                    </div>
                    
                </div>
            );
        }
        return (
            <div className='container-fluid'><div className='row'>
                <img src={this.state.menuHamColor}
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
                        style={{ background: this.state.navScroll, height: '126px', marginTop: '-0.5%', border: '1px transparent'}}>
                    <Navbar.Header>
                        <Nav>
                                <a href="/"><img style={{height:'155px'}} className='img-responsive logoLeft' src={this.state.logoColor} alt="logo" />
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
                                {/* {this.renderSearchModal()} */}
                                {/* <div onClick={this.handleShowSearch} className='row' className={this.state.searchColor}></div> */}
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
