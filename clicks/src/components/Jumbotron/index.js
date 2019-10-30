import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";

import { displayJoke } from "../../actions";

// PURPOSE: to use Redux to display a random joke when the JokeButton is clicked
class Jumbo extends Component {
    
    render() {
        // console.log(this.props);
        return (
            <Jumbotron>
                <h1 className="text-center">Welcome to Button City</h1>
                <hr></hr>
                <p className="text-center">{this.props.newJoke.Q}</p>
                <p className="text-center">{this.props.newJoke.A}</p>
            </Jumbotron>
        );
    };
};

const mapStateToPRops = state => {
    // console.log(state);
    return { newJoke: state.displayJokeReducer };
};

export default connect(mapStateToPRops, {
    displayJoke
})(Jumbo);