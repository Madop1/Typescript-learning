import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import userReducer from "./CRUD/userReducer";
import iceCreamReducer from "./IceCreams/iceCreamReduxcer";


const reducerCombine = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    data:userReducer
})

export default reducerCombine