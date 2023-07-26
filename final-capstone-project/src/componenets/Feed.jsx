import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Podcasts from "./Podcasts";
import { useState } from "react";

const Feed = (prop) => {
    const { podcastData } = prop

    const [selectedGenre, setSelectedGenre ] = useState([])

    const handleGenreSelection = (genreId) => {
      setSelectedGenre(genreId)
      console.log(selectedGenre)
    } 


    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
            <Box sx={{  height: { sx: "auto", md: "93vh" }, 
                        width: { md: "50vh"},
                        borderRight: "2px solid #fafafa",
                        mt: 1,
                        px: { sx: 0, md: 2 }
                    }}>
                <Sidebar
                         onSelect={handleGenreSelection} />
            </Box>
            <Box sx={{ overflowY: "auto", height: "90vh", flex: 2}}>
                <Typography variant="h5" sx={{color: "#9c27b0", 
                                              fontWeight: "bold", 
                                              m: 2 }}>
                        <span>Discover</span>
                </Typography>
                <Podcasts selectedGenre={selectedGenre}
                          podcastData={podcastData}/>
            </Box>
        </Stack>
    )
}

export default Feed