import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddUsers } from "../Redux/CRUD/userAction";
function AddUser() {
    const [data, setData] = useState({
        name: "",
        email: "",
        contact: "",
        id:""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    let dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        if (!data.name || !data.email || !data.contact) {
            // console.log("inside if///");
            setError("Please Input Data");
        } else {
            // console.log("ddddd", data  );
            dispatch(AddUsers({
                ...data,
            }));
            navigate("/");
            setError("");
        }
    };
    // console.log(data, " DATA DATA");

    return (
        <div>
            <Button
                style={{ width: "100px", marginTop: "20px" }}
                variant="contained"
                color="secondary"
                type="submit"
                onClick={() => navigate("/crud")}
            >
                Go back
            </Button>
            <h2>Add User </h2>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <TextField
                id="standard-basic"
                label="Name"
                name="name"
                variant="standard"
                value={data.name}
                type="text"
                onChange={handleChange}
            />
            <br />
            <TextField
                id="standard-basic"
                label="Email"
                name="email"
                variant="standard"
                value={data.email}
                type="email"
                onChange={handleChange}
            />
            <br />
            <br />
            <TextField
                id="standard-basic"
                label="Contact"
                name="contact"
                variant="standard"
                value={data.contact}
                type="number"
                onChange={handleChange}
            />
            <br />
            <Button
                style={{ width: "100px", marginTop: "20px" }}
                variant="contained"
                color="primary"
                type="button"
                onClick={() => handleSubmit()}
            >
                Submit
            </Button>
        </div>
    );
}

export default AddUser;
