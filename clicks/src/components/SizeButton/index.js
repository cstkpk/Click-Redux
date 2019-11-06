import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import { connect } from "react-redux";

class SizeButton extends Component {

    render() {
        return (
            <Button
                variant="outline-dark"
                size="md"
            >
                Hello?
            </Button>
        );
    };

};

export default SizeButton;