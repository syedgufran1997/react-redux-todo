import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TodoReducer } from "../TodoReducer/TodoReducer";

const rootReducer = combineReducers({ todoStore: TodoReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
