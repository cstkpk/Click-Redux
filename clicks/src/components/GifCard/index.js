import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { connect } from "react-redux";

// import { changeGif } from "../../actions";

class GifCard extends Component {
    render() {
        return (
            <Col md={{ span: 4, offset: 4 }}>
                <Card className="mt-3">
                    <Card.Img
                        alt="five" 
                        src={this.props.newGif.image[this.props.newGif.counter].image}
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

// N.B. You do not need to import or export an action creator that you are only retrieving state info from
// if you are not calling it anywhere (not sure how best to phrase that?)
// I.e. you still need to map it to props but don't need to do import or export it (because you aren't modifying its state?)
// ----------
// export default connect(mapStateToProps, {
//     changeGif
// })(GifCard);

export default connect(mapStateToProps)(GifCard);