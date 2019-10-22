export default (clicks = 0, action) => {
    switch (action.type) {
        case "INCREASE_CLICK_COUNT":
            return action.payload
        default:
            return clicks;
    }
};