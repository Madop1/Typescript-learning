import React, { useEffect, useReducer } from "react";
import axios from "axios";
import './App.css';

const initialState = {
    userDetails: [],
    loading: false,
    error: "",
};
interface User {
    name: string,
    email: string
};
// interface State {
//     userDetails: User,
//     loading: boolean,
//     error: string
// }
type Action = { type: "FETCH_API" } | { type: "GET_DATA_SUCCESS", payload: string } | { type: "ERROR", payload: string }

// interface Dispatch {
//     items: Action

// }


const detailReducer = (state: any, action: Action) => {
    switch (action.type) {
        case "FETCH_API":
            return {
                ...state,
                loading: true,
            };
        case "GET_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                userDetails: action.payload,
            };
        case "ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
    }
};

function ApiCalling() {
    const [state, dispatch] = useReducer(detailReducer, initialState);
    const { userDetails, loading, error } = state;

    useEffect(() => {
        dispatch({ type: "FETCH_API" });
        const getUsers = async () => {
            try {
                let response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                // console.log("=-=-=-=-=data=-=-=-=-try", response);


                if (response && response.status === 200) {

                    dispatch({ type: "GET_DATA_SUCCESS", payload: response.data });
                } else {
                    throw new Error("Something went Wrong...!!!");
                }
            } catch (error: any) {
                console.log("=-=-=-=-=data=-=-=-=-", error);
                dispatch({ type: "ERROR", payload: error.message });

            };
        }
        getUsers();
    }, []);



    return (
        <div className="app1">
            <h2>Fetching sample data from mockapi for practise.</h2>
            {loading ? (
                <p>loading...</p>
            ) : error ? (
                { error }
            ) : (
                <ul>
                    {userDetails.map((user: User, index: any) => (
                        <li key={index}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ApiCalling;

