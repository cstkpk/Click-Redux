// When ClickButton reaches 5 clicks, change gif

// TODO: 
// 1. For at least 0-5, have separate gifs
// 2. Save all gifs as files and figure out how to export them for use in state
export default (image = "https://media.giphy.com/media/8rFuPgWtlPu9QPqMqt/giphy.gif", action) => {
    switch (action.type) {
        case "CHANGE_GIF":
            return action.payload[0];
        default:
            return image;
    };
};