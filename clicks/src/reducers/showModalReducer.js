export default (showModal = true, action) => {
    switch (action.type) {
        case "SHOW_MODAL":
            return showModal
        default:
            return showModal
    };
};