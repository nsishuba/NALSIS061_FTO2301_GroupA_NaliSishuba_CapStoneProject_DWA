import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Podcasts from "./Podcasts";
import { useState } from "react";

const Feed = (prop) => {
    const { podcastData } = prop

    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

    const [selectedGenre, setSelectedGenre ] = useState("")

    const handleGenreSelection = (genreId, genreTitle) => {
      setSelectedGenre(genreId, genreTitle)
      console.log(selectedGenre)
    } 

    const filteredPodcasts = selectedGenre ?
    podcastData.filter(podcast => podcast.genres.includes(selectedGenre.id))
    : podcastData
  
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
            <Box sx={{  height: { sx: "auto", md: "93vh" }, 
                        width: { md: "50vh"},
                        borderRight: "2px solid #fafafa",
                        mt: 1,
                        px: { sx: 0, md: 2 }
                    }}>
                <Sidebar podcastData={podcastData}
                         onSelect={handleGenreSelection} />
            </Box>
            <Box sx={{ overflowY: "auto", 
                       height: "90vh", 
                       flex: 2, 
                       ml: 4,
                    }}>
                <Typography variant="h5" sx={{color: "#7b1fa2", 
                                              fontWeight: "bold", 
                                              m: 2 }}>
                        <span>{selectedGenre ? selectedGenre.title : "Discover"}</span>
                </Typography>
                <Podcasts selectedGenre={selectedGenre}
                          filteredPodcasts={filteredPodcasts}
                          months={months}/>
            </Box>
        </Stack>
    )
}

export default Feed