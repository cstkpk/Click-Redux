// Action creators here

export const increaseClickCount = (clickCount=0) => {
    return {
        type: "INCREASE_CLICK_COUNT",
        payload: clickCount
    };
};