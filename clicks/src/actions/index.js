// Action creators here

export const increaseClickCount = (clickCount) => {
    return {
        type: "INCREASE_CLICK_COUNT",
        payload: clickCount
    };
};