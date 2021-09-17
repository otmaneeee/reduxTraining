import { combineReducers } from "redux";
import todoReducer from "../containers/TodoApp/reducer";

export default combineReducers({
    Othmane : todoReducer,
});