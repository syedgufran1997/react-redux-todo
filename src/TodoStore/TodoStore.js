import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AdminReducer } from "../TodoReducer/AdminReducer";
import { TodoReducer } from "../TodoReducer/TodoReducer";
import { UserReducer } from "../TodoReducer/UserReducer";

const rootReducer = combineReducers({
  todoStore: TodoReducer,
  //   userStore: UserReducer,
  //   adminStore: AdminReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
