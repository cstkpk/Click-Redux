// Action creators here

// Action creator for increasing click count when ClickButton is clicked
export const increaseClickCount = () => {
    return {
        type: "INCREASE_CLICK_COUNT"
    };
};

// Action creator for changing type of animal when AnimalButton is clicked
export const changeAnimal = animal => {
    return {
        type: "CHANGE_ANIMAL",
        payload: animal
    };
};

// Action creator for changing the color of the button when ColorButton is clicked
export const changeColor = colors => {
    return {
        type: "CHANGE_COLOR",
        payload: colors
    };
};

// export const showModal = () => {
//     return {
//         type: "SHOW_MODAL"
//     }
// }