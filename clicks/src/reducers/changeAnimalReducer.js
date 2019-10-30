// When AnimalButton is clicked, choose a random animal from the animal array (passed as action.payload)
export default (animal = "french poodle", action) => {
    switch (action.type) {
        case "CHANGE_ANIMAL":
            return action.payload[Math.floor(Math.random() * action.payload.length)];
        default:
            return animal;
    };
};