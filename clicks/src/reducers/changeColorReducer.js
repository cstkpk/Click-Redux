// When ColorButton is clicked, choose a random color from the color array (passed as action.payload)
export default (color = {color: "primary", name: "Blue"}, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return action.payload[Math.floor(Math.random() * action.payload.length)];
        default:
            return color
    };
};