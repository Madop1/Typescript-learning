import { CrudAPP, Users } from "../../interface";
import { ADD_USERS, DELETE_USERS, FETCH_USERS, GET_USERS } from "./userTypes";

const initialState: CrudAPP = {
    users: [],
};

export type Action = {
    type: "ADD_USERS", payload: Users
} | { type: "FETCH_USERS", payload: Users } | { type: "GET_USERS", payload: Users } | { type: "DELETE_USERS", payload: Users }

const userReducer = (state: CrudAPP = initialState, action: Action) => {
    console.log("userReducer", action);

    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case ADD_USERS:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case GET_USERS: {
            return {
                users: action.payload,
            }
        };
        case DELETE_USERS: {
            return {
                ...state,
                users: state.users.filter((item: any) => item.id !== action.payload)
            };
        }
        default:
            return state;

    }
}

export default userReducer;