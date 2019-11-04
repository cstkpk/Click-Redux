import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { increaseClickCount, changeAllColors, changeGif } from "../../actions";
// import gifs from "../../assets/images";

// PURPOSE: to use Redux to increment the click counter each time the button is clicked
class ClickButton extends Component {
    // Once finished, use the imported gifs array above instead of this imgArr
    imgArr = ["https://media.giphy.com/media/3ov9k1lJ0A2o4OQew8/giphy.gif"]

    render() {
        
        // TODO: 
        // 1. For at least 0-5, have separate gifs
            // Change this if statement to a switch statement to account for all of the difference cases
            // Or can this be done right from the reducer? See /images/index.js
        // 2. Save all gifs as files and figure out how to export them for use in state
        if (this.props.clickCount === 5) {
            console.log("FIVE");
            this.props.changeGif(this.imgArr);
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


