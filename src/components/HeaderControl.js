import React, { Component } from "react";

class Header extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
                
        this.state = {
            show: false,
        };
    }
    handleDismiss() {
        this.setState({ show: false });
        if (window.scrollY !== 0)this.setState({ navScroll: 'white' });
    }
    handleShow() {
        if (window.scrollY > 49) this.setState({ navScroll: 'transparent' });
        this.setState({ show: true });
    }

    renderMenuHam() {
        if (this.state.show) {
            return (
                <div>
                </div>
            );
        }
        return (
            <div>
            </div>
        );

    }
    render() {
        return (
                <div>{this.renderMenuHam()}
                </div>
        )
    }
}
export default Header;