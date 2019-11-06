// When SizeButton is clicked, choose a size from the size array
export default (size = "md", action) => {
    switch (action.type) {
        case "CHANGE_SIZE":
            return action.payload[Math.floor(Math.random() * action.payload.length)];
        default:
            return size;
    };
};