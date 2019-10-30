import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { changeColor } from "../../actions";

class ColorButton extends Component {

    colorArr = [
        {color: "primary", name: "Blue"},
        {color: "secondary", name: "Grey"},
        {color: "success", name: "Green"},
        {color: "danger", name: "Red"},
        {color: "warning", name: "Yellow"},
        {color: "info", name: "Teal"},
        {color: "light", name: "White"},
        {color: "dark", name: "Black"}
    ]

    render() {
        // console.log(this.props);
        return (
            <Button
                variant={this.props.newColor.color}
                onClick={() => this.props.changeColor(this.colorArr)}
            >
                {this.props.newColor.name}!
            </Button>
        );
    };
};

const mapStateToProps = state => {
    // console.log(state);
    return {newColor: state.changeColorReducer };
};

export default connect(mapStateToProps, {
    changeColor
})(ColorButton);