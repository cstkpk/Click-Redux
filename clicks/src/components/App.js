import React from "react";
import { Container } from "react-bootstrap";

import ClickButton from "./ClickButton";
import AnimalButton from "./AnimalButton";
import ColorButton from "./ColorButton";
// import Modal1 from "./Modal";

function App() {
    return (
        <Container>
            <ClickButton />
            <AnimalButton />
            <ColorButton />
            {/* <Modal1 /> */}
        </Container>
    );
};

export default App;