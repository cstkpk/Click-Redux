import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { changeGif } from "../../actions";

class GifCard extends Component {
    render() {
        return (
            <Col md={{ span: 4, offset: 4 }}>
                <Card className="mt-3">
                    <Card.Img
                        alt="five" 
                        src={this.props.newGif}
                    />
                </Card>
            </Col>
        );
    };
};

const mapStateToProps = state => {
    return {
        newGif: state.changeGifReducer
    };
};

export default connect(mapStateToProps, {
    changeGif
})(GifCard);