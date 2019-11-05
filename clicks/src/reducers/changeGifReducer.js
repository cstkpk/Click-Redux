import gifs from "../assets/images";
// When ClickButton reaches 5 clicks, change gif

// TODO: 
// 1. For at least 0-5, have separate gifs
// 2. Save all gifs as files and figure out how to export them for use in state
// "https://media.giphy.com/media/8rFuPgWtlPu9QPqMqt/giphy.gif"
export default (image = gifs[0].image, action) => {
    switch (action.type) {
        case "CHANGE_GIF":
            return action.payload[5].image;
        default:
            return image;
    };
};