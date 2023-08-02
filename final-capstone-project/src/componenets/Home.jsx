import { Box, Stack, Typography, CircularProgress } from "@mui/material";
import Sidebar from "./Sidebar";
import PodcastList from "./PodcastList";
import genreData from "../genres.js";
import { useState, useEffect } from "react";

const Home = () => {
    const [podcastData, setPodcastData] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedGenre, setSelectedGenre] = useState("")

    useEffect(() => {
        fetch("https://podcast-api.netlify.app/shows")
        .then(res => res.json())
        .then(data => {
            setPodcastData(data)
            setLoading(false)
        })
    }, [])
    
    // useEffect(() => {
    //         console.log(selectedGenre);
    //     }, [selectedGenre]);

    if(loading) {
        return (
          <Box sx={{ display: "flex", mx: "45%", mt: 25 }}>
          <CircularProgress color="secondary"/>
        </Box>
        )
      } 
    
    //function that temporarily stores the selected genre in state 
    const handleGenreSelection = (genre) => {
        setSelectedGenre(genre)
    }

    const filteredPodcasts = selectedGenre ?
    podcastData.filter(podcast => podcast.genres.includes(selectedGenre.id))
    : podcastData
   
    return (


        <>
            
                <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
                    <Box sx={{  height: { sx: "auto", md: "90vh" }, 
                                width: {md: "25%", xs: "auto"},
                                borderRight: "2px solid #fafafa",
                                px: { sx: 0, md: 2 } }}>
                        <Sidebar genreData={genreData}
                                 onSelect={handleGenreSelection} />
                    </Box>
                    <Box sx={{ overflowY: "auto", 
                                height: "90vh", 
                                flex: 2, 
                                p: 1, }}>
                        <Typography variant="h5" sx={{ color: "#7b1fa2", 
                                                       fontWeight: "bold", 
                                                       mb: 2, 
                                                       }}>
                                <span>{selectedGenre ? selectedGenre.title : "Discover"}</span>
                        </Typography>
                        <PodcastList podcastData={podcastData}
                                     filteredPodcasts={filteredPodcasts}
                                     selectedGenre={selectedGenre} />
                     </Box> 
                </Stack>
        </>
    )
}

export default Home