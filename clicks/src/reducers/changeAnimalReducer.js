export default (animal = "cow", action) => {
    switch (action.type) {
        case "CHANGE_ANIMAL":
            return action.payload[Math.floor(Math.random() * action.payload.length)];
        default:
            return animal;
    };
};