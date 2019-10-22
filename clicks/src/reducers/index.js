import { combineReducers } from "redux";
import increaseClickCountReducer from "./increaseClickCountReducer";

export default combineReducers({
    increaseClickCount: increaseClickCountReducer
});