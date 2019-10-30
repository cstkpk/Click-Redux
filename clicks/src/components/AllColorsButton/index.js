import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { changeAllColors } from "../../actions";

class AllColorsButton extends Component {
    outlineColorsArr = ["outline-primary", "outline-secondary", "outline-success", "outline-danger", 
    "outline-warning", "outline-info", "outline-light", "outline-dark"];
    
    render() {
        // console.log(this.props);
        return (
            <Button
                variant={this.props.newAllColor}
                onClick={() => this.props.changeAllColors(this.outlineColorsArr)}
            >
                Change some colors 
            </Button>
        );
    };
};

const mapStateToProps = state => {
    return { newAllColor: state.changeAllColorsReducer };
};

export default connect(mapStateToProps, {
    changeAllColors
})(AllColorsButton);