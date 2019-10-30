import React from "react";
import { Container } from "react-bootstrap";

import Jumbo from "./Jumbotron";
import ClickButton from "./ClickButton";
import AnimalButton from "./AnimalButton";
import ColorButton from "./ColorButton";
import JokeButton from "./JokeButton";
import AllColorsButton from "./AllColorsButton";
import GifCard from "./GifCard";
// import Modal1 from "./Modal";

function App() {
    return (
        <Container>
            <Jumbo />
            <ClickButton />
            <AnimalButton />
            <ColorButton />
            <JokeButton />
            <AllColorsButton />
            <GifCard />
            {/* <Modal1 /> */}
        </Container>
    );
};

export default App;