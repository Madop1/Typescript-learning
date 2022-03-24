import { createStore, applyMiddleware } from "redux";
import reducerCombine from "./combineReducers";
import thunk from "redux-thunk";

const store = createStore(reducerCombine, applyMiddleware(thunk));
export default store;