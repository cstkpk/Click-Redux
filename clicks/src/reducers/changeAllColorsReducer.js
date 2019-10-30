// When AllColorsButton is clicked, choose a random color from the colors array and change color of a group of buttons
export default (color = "outline-dark", action) => {
    switch (action.type) {
        case "CHANGE_ALL_COLORS":
            return action.payload[Math.floor(Math.random() * action.payload.length)];
        default:
            return color;
    };
};