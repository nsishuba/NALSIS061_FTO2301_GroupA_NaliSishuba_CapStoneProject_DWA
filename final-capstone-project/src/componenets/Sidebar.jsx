import { Stack, Button } from "@mui/material";
import genres from "../genres.js"

const Sidebar = () => {
    
    return (
            <Stack
                direction="row"
                sx={{
                    overflowY: "auto",
                    height: { sx: "auto", md: "95%" },
                    flexDirection: { md: "column" },
                }}>
                    {genres.map((genre) => {
                        return (
                            <Button 
                                    color="secondary" 
                                    sx={{ height: { xs: "auto", md: "95%"},
                                    mx: { xs: 5, md: 0 },
                                    borderRadius: "15px" }}
                                    key={genre.id}>
                                {genre.title}
                            </Button>
                           
                        )
                    })}
                
            </Stack>
    )
} 

export default Sidebar