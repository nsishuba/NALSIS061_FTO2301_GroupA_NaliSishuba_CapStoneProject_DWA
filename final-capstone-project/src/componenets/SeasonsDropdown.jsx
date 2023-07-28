import { Box, MenuItem, Select, InputLabel, List, ListItem} from "@mui/material"
import { useState } from "react"
import ListItemText from '@mui/material/ListItemText';

const SeasonsDropdown = (prop) => {
    const { seasons } = prop
    const [season, setSeason] = useState('');

    if (!Array.isArray(seasons)) {
        return null; // Return early if seasons is not an array
      }
    const selectSeason = seasons.map((season) => (
                <MenuItem key={season.season} value={season.season}>Season {season.season}</MenuItem> ))

    const selectedSeason = seasons.find((item) => item.season === season)

    const episodes = selectedSeason ? (
        selectedSeason.episodes.map((episode) => (
          <ListItem key={episode.episode} button>
            <ListItemText primary={`${episode.episode}. ${episode.title}`} />
          </ListItem>
          
        ))
      ) : (
        <ListItem>
          <ListItemText primary="Please select a season." />
        </ListItem>
      )

    const handleChange = (event) => {
      setSeason(event.target.value);
    }
   
   return ( 
            <Box sx={{ mx: 4}}>
                <InputLabel id="select-label">Seasons</InputLabel>
                <Select
                labelId="select-label"
                id="select"
                value={season}
                label="Seasons"
                onChange={handleChange}
                sx={{ width: { md: "28vh", xs: "auto"}, height: "8vh" }}
                >
                
                    {selectSeason}
                </Select>
                <List>
                      {episodes}
                </List>
            </Box>
   )
}

export default SeasonsDropdown
