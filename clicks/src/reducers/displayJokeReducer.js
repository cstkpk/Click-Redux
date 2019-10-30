// When JokeButton is clicked, choose a random joke from the jokes array
export default (joke = {Q: null, A: null}, action) => {
    switch (action.type) {
        case "DISPLAY_JOKE":
            return action.payload[Math.floor(Math.random() * action.payload.length)];
        default:
            return joke;
    };
};