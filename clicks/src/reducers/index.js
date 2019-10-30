import { combineReducers } from "redux";
import increaseClickCountReducer from "./increaseClickCountReducer";
import changeAnimalReducer from "./changeAnimalReducer";
import changeColorReducer from "./changeColorReducer";
// import showModalReducer from "./showModalReducer";

export default combineReducers({
    increaseClickCountReducer: increaseClickCountReducer,
    changeAnimalReducer: changeAnimalReducer,
    changeColorReducer
    // showModalReducer: showModalReducer
});