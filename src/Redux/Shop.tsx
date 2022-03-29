import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
import CakeContainer from './CakeContainer'
import NewIceCreamContainer from './IceCreamContainer'
import "../shop.css"

function Shop() {
    let navigate=useNavigate();
    return (
        <div className='App1'>
            <CakeContainer />
            <NewIceCreamContainer />
            <Button
                sx={{ mt: 55, }}
                variant="contained"
                color="secondary"
                type="submit"
                onClick={() => navigate("/")}
            >
                Return to Home component
            </Button>
        </div>

    )
}

export default Shop
