import React, { Component } from 'react';
import {  } from 'react-bootstrap';

class SearchModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShowSearch = this.handleShowSearch.bind(this);
        this.handleCloseSearch = this.handleCloseSearch.bind(this);

        this.state = {
            showSearch: false
        };
    }

    handleCloseSearch() {
        this.setState({ showSearch: false });
    }

    handleShowSearch() {
        this.setState({ showSearch: true });
    }


    render() {
        return (
            <div>
                <p>Click to get the full Modal experience!</p>

                <Button bsStyle="primary" bsSize="large" onClick={this.handleShowSearch}>
                    Launch demo modal
                </Button>

                <Modal show={this.state.showSearch} onHide={this.handleCloseSearch}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseSearch}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

export default SearchModal;
