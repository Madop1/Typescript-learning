import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";


export default function HomeComponent() {
    let navigate = useNavigate();

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                       
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
                    <Button color="inherit" sx={{ mr: 10, }}>Home</Button>
                    <Button color="inherit" sx={{ mr: 10, }} onClick={() => navigate("/crud")}>CRUD</Button>
                    <Button color="inherit" sx={{ mr: 165, }} onClick={() => navigate("/shop")}>Shop</Button>
                    <Button color="inherit" sx={{ mr: 5, }} onClick={() => navigate("/login")}>Login</Button>
                    <Button color="inherit" sx={{ mr: 5, }} onClick={() => navigate("/register")}>Register</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <div>
            <h3>
                Welocme.
            </h3>
            <p>
                
            </p>
        </div>
        </>
    );
}