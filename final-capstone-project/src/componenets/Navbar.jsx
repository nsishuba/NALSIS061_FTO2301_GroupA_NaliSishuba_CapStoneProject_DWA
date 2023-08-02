import { Stack, Typography } from "@mui/material"
import Logo from "../assets/yoga.png"

const Navbar = () => {
   
    return (
        <Stack 
            direction="row" 
            alignItems="center" 
            p={2} 
            sx={{ position: "sticky", 
                background: "#4a148c", 
                justifyContent: "space-between"}}>
            <img src={Logo} height={30}  />
            <Typography 
                variant="h6" 
                component="h6" 
                color="white" 
                sx={{ flexGrow: 1, ml: 2 }}>
                Euphoria
            </Typography>
        </Stack>
    )
}

export default Navbar