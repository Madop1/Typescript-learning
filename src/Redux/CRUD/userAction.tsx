import axios from "axios";
import { Users } from "../../interface";
import { ADD_USERS, DELETE_USERS, FETCH_USERS, GET_USERS } from "./userTypes";

export const FetchUsers = () => (dispatch: (arg0: { type: string; payload: Users; }) => void) => {
      axios.get("https://6221efc4666291106a17da30.mockapi.io/users")
        .then((data) => {
             console.log("ddddd", data.data);
            dispatch({ type: FETCH_USERS, payload:data.data})
        })

        .catch((error) => {
            console.log(error);
        })
};

export const DeleteUsers = (id: string) => (dispatch: (arg0: { type: string; payload: string; }) => void) => {
    axios.delete(`https://6221efc4666291106a17da30.mockapi.io/users/${id}`)
        .then((data) => {
            dispatch({ type: DELETE_USERS, payload: id })
        })
        .catch((error) => {
            console.log(error);
        })
};

export const AddUsers = (newData: Users) => (dispatch: (arg0: { type: string; payload: Users; }) => void) => {
    axios
        .post(`https://6221efc4666291106a17da30.mockapi.io/users`, newData)
        .then((data) => {
            console.log("ddddd", data);
            dispatch({ type: ADD_USERS, payload: data.data });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const editUsers = (users: Users, id: string) => (dispatch: (arg0: any) => void) => {
    axios
        .put(`https://6221efc4666291106a17da30.mockapi.io/users/${id}`, users)
        .then(() => {
            dispatch(FetchUsers())
        })
        .catch((error) => {
            console.log(error);
        });
};


export const getUsers = (id: any) => (dispatch: (yes: { type: string; payload: string; }) => void) => {
    console.log("getUsers------",id)
    axios
        .get(`https://6221efc4666291106a17da30.mockapi.io/users/${id}`)
        .then((data) => {
           
            dispatch({ type: GET_USERS, payload: data.data });
        })
        .catch((error) => {
            console.log(error);
        });
};
