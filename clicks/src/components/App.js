import React from "react";
import { Container } from "react-bootstrap";

import ClickButton from "./ClickButton";
import AnimalButton from "./AnimalButton";
// import Modal1 from "./Modal";

function App() {
    return (
        <Container>
            <ClickButton />
            <AnimalButton />
            {/* <Modal1 /> */}
        </Container>
    );
};

export default App;