import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { changeSizeMed } from "../../../actions";

class SizeButtonMed extends Component {
    render() {
        return (
            <Button
                variant="outline-dark"
                size={this.props.newSize}
                onClick={() => this.props.changeSizeMed()}
            >
                Medium
            </Button>
        );
    };
};

const mapStateToProps = state => {
    return {
        newSize: state.changeSizeReducer
    };
};

export default connect(mapStateToProps, {
    changeSizeMed
})(SizeButtonMed);