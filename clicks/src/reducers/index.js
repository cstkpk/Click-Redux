import { combineReducers } from "redux";
import increaseClickCountReducer from "./increaseClickCountReducer";
import showModalReducer from "./showModalReducer";

export default combineReducers({
    increaseClickCountReducer: increaseClickCountReducer,
    showModalReducer: showModalReducer
});