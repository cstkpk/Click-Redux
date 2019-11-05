import gifs from "../assets/images";
// When ClickButton reaches 5 clicks, change gif

// TODO: 
// 1. How to use some kind of variable or counter to specify the index of action.payload?
    // Tried using initialState and setting a counter, but so far no luck there
    // Tried creating a counter variable but it keeps getting reset back to its inital declared value
// POTENTIAL WORKAROUND:
    // Write action creators for each gif, so the switch statement here can specify which index in the 
        // action.payload to return for each case
    // This obviously isn't ideal because then there would be several action creator functions that
        // essentially do the same thing, but it should work...

// export const initialState = {
//     image: gifs[0].image,
    // counter: 0
// };

// export default (image = gifs[0].image, action) => {
// export default (state = initialState, action) => {
//     switch (action.type) {
//         case "CHANGE_GIF":
//             return action.payload[action.index++];
//         default:
//             return state;
//     };
// };

export const initialState = {
    counter: 0,
    image: gifs
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_GIF":
            return {
                ...state,
                counter: action.index,
                image: action.payload
            }
        default:
            return state;
    };
};