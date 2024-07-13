import { combineReducers } from "redux";
import counterReducer from "./counter";
import todoReducer from "./todo";

const allReducers = combineReducers({
    counterReducer,
    todoReducer,
    //them nhieu reducer vao day
})

export default allReducers;