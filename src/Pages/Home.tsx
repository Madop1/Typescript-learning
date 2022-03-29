import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@material-ui/icons/Edit";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Users } from "../interface";
import { DeleteUsers, FetchUsers } from "../Redux/CRUD/userAction";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Home() {
  let dispatch = useDispatch();
  const users = useSelector((state: RootStateOrAny) => state.data.users);
  let navigate = useNavigate();
  const [state, setState] = useState([]);
  console.log(users, "userssssss");

  const loadUsers = async () => {
    dispatch(FetchUsers());
  };

  useEffect(() => {
    loadUsers();
    //setState(users)
  }, []);

  useEffect(() => {
    // console.log("=-=-=-=-=-=-data=-=-=-=-=-", users);
    if (users) setState(users);
  }, [users]);

  const handleDelete = (id: string) => {
    console.log("iiiiddddddd", id)
    dispatch(DeleteUsers(id));
  };


  return (
    <>
      <h3 >CRUD HOME PAGE</h3>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/addUser")}
        >
          Add user
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 900, marginTop: 10 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.length > 0 &&
              state.map((user: Users, index) => (
                <StyledTableRow key={index}>
                  {/* {console.log("userrrrr", user)} */}
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  {/* <StyledTableCell align="center">
                    {user.address.city}
                  </StyledTableCell> */}
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      aria-label="contained primary button group"
                    >
                      <IconButton
                        color="primary"
                        onClick={() => navigate(`/editUsers/${user.id}`)}
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        aria-label="delete"
                        color="warning"
                        onClick={() => {
                          handleDelete(user.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button

        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => navigate("/")}
      >
        Return to Home component
      </Button>
    </>
  );
}

export default Home;
