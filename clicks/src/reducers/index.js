import { combineReducers } from "redux";
import increaseClickCountReducer from "./increaseClickCountReducer";
import changeAnimalReducer from "./changeAnimalReducer";
import changeColorReducer from "./changeColorReducer";
import displayJokeReducer from "./displayJokeReducer";
// import showModalReducer from "./showModalReducer";

export default combineReducers({
    increaseClickCountReducer: increaseClickCountReducer,
    changeAnimalReducer: changeAnimalReducer,
    changeColorReducer,
    displayJokeReducer
    // showModalReducer: showModalReducer
});