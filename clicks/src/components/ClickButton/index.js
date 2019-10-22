import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increaseClickCount } from "../../actions";

class ClickButton extends Component {

    render() {
        console.log(this.props);
        return (
            <Button 
                variant="outline-dark"
                // TODO: Need to pass in a value of clicks, not a function
                onClick={() => this.props.increaseClickCount(increaseClickCount)}
            >
                Click Me! 
            </Button>
        );
    };
};

// Returns an object that shows up as props inside of the component
const mapStateToProps = state => {
    console.log(state);
    return { clickCount: state.increaseClickCount }
};

// Exporting ClickButton component and integrated Redux components
export default connect(mapStateToProps, {
    increaseClickCount: increaseClickCount
})(ClickButton);


