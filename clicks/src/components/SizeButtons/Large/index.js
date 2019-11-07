import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { changeSizeLg } from "../../../actions";

class SizeButtonLg extends Component {
    render() {
        return (
            <Button
                variant={this.props.newAllColor}
                size={this.props.newSize}
                onClick={() => this.props.changeSizeLg()}
            >
                LARGE
            </Button>
        );
    };
};

const mapStateToProps = state => {
    return {
        newAllColor: state.changeAllColorsReducer,
        newSize: state.changeSizeReducer
    };
};

export default connect(mapStateToProps, {
    changeSizeLg
})(SizeButtonLg);