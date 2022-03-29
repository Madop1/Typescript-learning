import { createStore, applyMiddleware } from "redux";
import reducerCombine from "./combineReducers";
import thunk from "redux-thunk";
import logger from "redux-logger"

const store = createStore(reducerCombine, applyMiddleware(thunk,logger));
export default store;