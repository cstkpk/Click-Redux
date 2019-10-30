import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { changeAnimal } from "../../actions";

// PURPOSE: to use Redux to choose a random element from an array when button is clicked
class AnimalButton extends Component {
    animalArr = ["butterfly", "unicorn", "lobster", "eel", "bearded dragon", "musk ox"];
    
    render() {
        return (
            <Button
                variant="outline-secondary"
                onClick={() => this.props.changeAnimal(this.animalArr)}
            >
                I am a {this.props.newAnimal}
            </Button>
        );
    };
};

const mapStateToProps = state => {
    return {newAnimal: state.changeAnimalReducer };
}

export default connect(mapStateToProps, {
    changeAnimal: changeAnimal 
})(AnimalButton);