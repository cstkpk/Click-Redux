import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increaseClickCount } from "../../actions";

class ClickButton extends Component {

    render() {
        console.log(this.props);
        return (
            <>
            <Button 
                variant="outline-dark"
                // TODO: Need to pass in a value of clicks, not a function
                onClick={() => this.props.increaseClickCount()}
            >
                Click Me! 
            </Button>
            <p>Hello {this.props.clickCount}</p>
            </>
        );
    };
};

// Returns an object that shows up as props inside of the component
// We're taking our state object (all of the data that's inside of our Redux store) 
    // and we're going to run some calculation/computation on it that will cause that data to show up
    // as props inside of our component
const mapStateToProps = state => {
    console.log(state);
    return { clickCount: state.increaseClickCountReducer }
    // return state
};

// Exporting ClickButton component and integrated Redux components
export default connect(mapStateToProps, {
    increaseClickCount: increaseClickCount
})(ClickButton);


