import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { changeSizeSmall } from "../../../actions";

// PURPOSE: To use Redux to change size when clicked
class SizeButtonSmall extends Component {
    // sizeArr = ["sm", "md", "lg"];

    render() {
        // console.log(this.props);
        return (
            <Button
                variant={this.props.newAllColor}
                size={this.props.newSize}
                onClick={() => this.props.changeSizeSmall()}
            >
                small
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
    changeSizeSmall
})(SizeButtonSmall);