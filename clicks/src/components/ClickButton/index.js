import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { increaseClickCount, changeAllColors, changeGif } from "../../actions";
import gifs from "../../assets/images";

// PURPOSE: to use Redux to increment the click counter each time the button is clicked
class ClickButton extends Component {

    render() {
        // TODO: 
        // 1. For at least 0-5, have separate gifs
            // Change this if statement to a switch statement to account for all of the difference cases
            // Or can this be done right from the reducer? See /images/index.js
            // How to pass a second parameter of clickCount into the changeGif function? Is this possible?
                // That's how I would increment the gifs index to show the next gif
        // N.B. For now, this only changes to 5 (until I figure ^^ out)
        if (this.props.clickCount === 5) {
            // console.log("FIVE");
            this.props.changeGif(gifs);
        };
        
        // console.log(this.props);
        return (
            <Button 
                variant={this.props.newAllColor}
                onClick={() => this.props.increaseClickCount()}
            >
                I've been clicked {this.props.clickCount} times! 
            </Button>
        );
    };
};

// Returns an object that shows up as props inside of the component
// We're taking our state object (all of the data that's inside of our Redux store) 
    // and we're going to run some calculation/computation on it that will cause that data to show up
    // as props inside of our component
const mapStateToProps = state => {
    return { 
        clickCount: state.increaseClickCountReducer,
        newAllColor: state.changeAllColorsReducer,
        newGif: state.changeGifReducer
    }
    // return state
};

// Exporting ClickButton component and integrated Redux components
export default connect(mapStateToProps, {
    increaseClickCount: increaseClickCount,
    changeAllColors,
    changeGif
})(ClickButton);


