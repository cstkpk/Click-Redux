import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { increaseClickCount, changeGif } from "../../actions";
import gifs from "../../assets/images";

// PURPOSE: to use Redux to increment the click counter each time the button is clicked
// and to change the gif based on the clickCount and conditions
class ClickButton extends Component {

    handleOnClick = () => {
        const gifObj = {
            gifs,
            index: this.props.clickCount + 1 // There is a delay because of the "waterfall" this component has to go through. The +1 will give temp relief
        };
        this.props.increaseClickCount();
        // From clickCount 0-5, call changeGif action creator
        if (this.props.clickCount < 5) {
            this.props.changeGif(gifObj);
        } 
        // When clickCount is at 10, call changeGif action creator
        else if (this.props.clickCount === 9) {
            this.props.changeGif(gifObj);
        }
    }
    
    render() {
        return (
            <Button 
                variant={this.props.newAllColor}
                onClick={this.handleOnClick}
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

// mapDispatchToProps lets you specify which actions the component might need to dispatch
// N.B. The connect function (below, in export default) receives dispatch as the second argument by default
// dispatch is always the first argument of mapDispatchToProps
const mapDispatchToProps = dispatch => ({
    changeGif: gifObject => {
        return dispatch(changeGif(gifObject));
    },
    increaseClickCount: () => {
        return dispatch(increaseClickCount());
    }
});

// Exporting ClickButton component and integrated Redux components
    // Below is the old version before mapDispatchToProps was integrated (to handle the gifs)
// ----------
// export default connect(mapStateToProps, {
//     increaseClickCount: increaseClickCount,
//     changeAllColors,
//     changeGif
// })(ClickButton);
// ----------
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClickButton);


