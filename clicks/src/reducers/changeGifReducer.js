// When ClickButton reaches 5 clicks, change gif
export default (image = "https://media.giphy.com/media/8rFuPgWtlPu9QPqMqt/giphy.gif", action) => {
    switch (action.type) {
        case "CHANGE_GIF":
            return action.payload[0];
        default:
            return image;
    };
};