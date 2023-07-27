import { Stack, Button } from "@mui/material";
import genreData from "../genres.js";
import { useLinkClickHandler } from "react-router-dom";

const Sidebar = (prop) => {
    const { onSelect } = prop

    return (
            <Stack
                direction="row"
                sx={{
                    overflowY: "auto",
                    height: { sx: "auto", md: "95%" },
                    flexDirection: { md: "column" },
                }}>
                <Button 
                        color="secondary" 
                        sx={{ height: { xs: "auto", md: "95%"},
                        mx: { xs: 5, md: 0 },
                        borderRadius: "15px" }}
                        >
                    All
                </Button>
                {genreData.map(({id, title}) => {
                    return (
                        <Button 
                                color="secondary" 
                                sx={{ height: { xs: "auto", md: "95%"},
                                mx: { xs: 5, md: 0 },
                                borderRadius: "15px" }}
                                key={id}
                                onClick={() => onSelect({id, title})}>
                            {title}
                        </Button>
                    )
                })}
            </Stack>
        )
} 

export default Sidebar