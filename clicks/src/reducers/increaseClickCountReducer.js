// When ClickButton is clicked, increment the click counter
export default (clicks = 0, action) => {
    switch (action.type) {
        case "INCREASE_CLICK_COUNT":
            return clicks + 1
        default:
            return clicks;
    }
};