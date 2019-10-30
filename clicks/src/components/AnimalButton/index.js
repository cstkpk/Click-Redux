import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import { connect } from "react-redux";

class AnimalButton extends Component {
    render() {
        return (
            <Button
                variant="outline-secondary"
            >
                I am a
            </Button>
        );
    };
};

export default AnimalButton;