import { combineReducers } from "redux";
import increaseClickCountReducer from "./increaseClickCountReducer";
import changeAnimalReducer from "./changeAnimalReducer";
import changeColorReducer from "./changeColorReducer";
import displayJokeReducer from "./displayJokeReducer";
import changeAllColorsReducer from "./changeAllColorsReducer";
import changeGifReducer from "./changeGifReducer";
// import showModalReducer from "./showModalReducer";

export default combineReducers({
    increaseClickCountReducer: increaseClickCountReducer,
    changeAnimalReducer: changeAnimalReducer,
    changeColorReducer,
    displayJokeReducer,
    changeAllColorsReducer,
    changeGifReducer
    // showModalReducer: showModalReducer
});