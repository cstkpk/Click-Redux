// Action creators here

export const increaseClickCount = clicks => {
    return {
        type: "INCREASE_CLICK_COUNT",
        payload: clicks
    };
};