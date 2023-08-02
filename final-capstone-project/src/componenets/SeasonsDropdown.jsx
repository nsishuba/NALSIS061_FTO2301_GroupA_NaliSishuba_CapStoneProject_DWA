import { Box, MenuItem, Select, InputLabel, ListItem} from "@mui/material"
import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import ListItemText from '@mui/material/ListItemText';
import PodcastEpisodeCard from "./PodcastEpisodeCard";

const SeasonsDropdown = (prop) => {
  //contains all the seasons of specific a podcast(show)
    const { seasons } = prop
    const [selectSeason, setSelectSeason] = useState('')
    const [selectedEpisode, setSelectedEpisode] = useState({});
    // const [images, setImages] = useState({})

    if (!Array.isArray(seasons)) {
        return null; // Return early if seasons is not an array
    }
    
    const handleChange = (event) => {
      setSelectSeason(event.target.value);
    }

    const selectedSeason = seasons.find((item) => item.season === selectSeason)

    const episodes = selectedSeason ? (
        selectedSeason.episodes.map((episode) => (
          <PodcastEpisodeCard key={episode.episode}
                              episodeNumber={episode.episode}
                              episodeTitle={episode.title}
                              episodeDescription={episode.description}
                              episodeFile={episode.file}
                               />
          
        ))
      ) : (
        <ListItem>
          <ListItemText primary="Please select a season." />
        </ListItem>
      )
   console.log(selectedSeason)
   return ( 
            <Box sx={{ mx: 4}}>
                <InputLabel id="select-label">Seasons</InputLabel>
                <Select
                        labelId="select-label"
                        id="select"
                        value={selectSeason}
                        label="Seasons"
                        onChange={handleChange}
                        sx={{ width: { md: "28vh", xs: "auto"}, height: "8vh", mb: 1 }}
                >
                 
                  {seasons.map((season) => {
                      return (
                          <MenuItem key={season.season} value={season.season}>
                          Season {season.season}</MenuItem> 
                      )
                    })
                  }

                </Select>
                {episodes}
               
            </Box>
   )
}

export default SeasonsDropdown
