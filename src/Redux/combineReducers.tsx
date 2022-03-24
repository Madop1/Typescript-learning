import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./IceCreams/iceCreamReduxcer";


const reducerCombine = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default reducerCombine