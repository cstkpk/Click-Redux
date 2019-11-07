import React from "react";
import { Container } from "react-bootstrap";

import Jumbo from "./Jumbotron";
import ClickButton from "./ClickButton";
import AnimalButton from "./AnimalButton";
import ColorButton from "./ColorButton";
import JokeButton from "./JokeButton";
import AllColorsButton from "./AllColorsButton";
import SizeButtonSmall from "./SizeButtons/Small";
import SizeButtonMed from "./SizeButtons/Medium";
import SizeButtonLg from "./SizeButtons/Large";
import GifCard from "./GifCard";
// import Modal1 from "./Modal";

function App() {
    return (
        <Container>
            <Jumbo />
            <ClickButton />
            <AnimalButton />
            <ColorButton />
            <AllColorsButton />
            <JokeButton />
            <SizeButtonSmall />
            <SizeButtonMed />
            <SizeButtonLg />
            <GifCard />
            {/* <Modal1 /> */}
        </Container>
    );
};

export default App;