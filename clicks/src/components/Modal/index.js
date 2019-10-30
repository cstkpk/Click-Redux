import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { showModal } from "../../actions";

class Modal1 extends Component {
    render() {
        return(
            <Modal>
                <Modal.Header show={this.props.showModal} closeButton>
                    <Modal.Title>Hello!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Hello again!</p>
                </Modal.Body>
                <Modal.Footer className="modal-bg">
                    <Button variant="outline-dark" className="btn-block">Close</Button>
                </Modal.Footer>
            </Modal>
        );
    };
};

const mapStateToProps = state => {
    console.log(state);
    return { showModal: state.showModalReducer };
};

export default connect(mapStateToProps, {
    showModal: showModal
})(Modal1);