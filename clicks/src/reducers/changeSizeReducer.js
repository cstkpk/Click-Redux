// When SizeButton is clicked, choose a size from the size array
export default (size = "md", action) => {
    switch (action.type) {
        case "CHANGE_SIZE_SMALL":
            return "sm";
        case "CHANGE_SIZE_MED":
            return "md";
        default:
            return size;
    };
};