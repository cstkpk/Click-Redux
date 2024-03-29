import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { displayJoke } from "../../actions";

// PURPOSE: to use Redux to select a random joke when the button is clicked (to be displayed in Jumbotron)
class JokeButton extends Component {
    jokeArr = [
        {Q: "Q: Why was the broom late?", A: "A: It over swept!"},
        {Q: "Q: What does a clock do when it gets hungry?", A: "A: It goes back four seconds!"},
        {Q: "Q: How many tickles does it take to make a squid laugh?", A: "A: Ten tickles!"},
        {Q: "Q: What does a bird's phone sound like?", A: "A: Wing wing!"},
        {Q: "Q: What's a moth's life motto?", A: "A: Always look on the bright side"},
        {Q: "Q: Why can't a nose be twelve inches long?", A: "A: Because then it'd be a foot!"},
        {Q: "Q: What do you call a bear with no teeth?", A: "A: A GUMMY BEAR"},
        {Q: "Q: What happens when a seagull flies over the bay?", A: "A: It turns into a bagel"}
    ];
    
    render() {
        return (
            <Button
                variant="outline-dark"
                onClick={() => this.props.displayJoke(this.jokeArr)}
            >
                Tell me a joke
            </Button>
        );
    };
};

const mapStateToProps = state => {
    return { newJoke: state.displayJokeReducer };
};

export default connect(mapStateToProps, {
    displayJoke
})(JokeButton);