import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { editUsers, getUsers } from "../Redux/CRUD/userAction";

function EditUsers() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    id:""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();

  const { users } = useSelector((state:RootStateOrAny) => state.data);
  let dispatch = useDispatch();

  useEffect(() => {
    //   console.log("iiiiii0",id)
    dispatch(getUsers(id));
  }, []);

  useEffect(() => {
    if (users) {
      setData({ ...users });
    }
  }, [users]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (id:string="") => {
    if (!data.name || !data.email || !data.contact) {
      // console.log("inside if///");
      setError("Please Input Data");
    } else {
      //   console.log("ddddd", data  );
      dispatch(editUsers({...data},id));
      navigate("/crud");
      setError("");
    }
  };
  //   console.log(data, " DATA DATA");

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
      <h2>Edit User </h2>
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
        onClick={() => handleSubmit(id)}
      >
        Update
      </Button>
    </div>
  );
}

export default EditUsers;
