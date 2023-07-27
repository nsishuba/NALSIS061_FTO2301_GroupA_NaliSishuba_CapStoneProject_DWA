import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useState } from "react"

const style = {
    width: 'auto',
    maxWidth: "100%",
    bgcolor: 'background.paper',
    mx: 4
  };

  const PodcastEpisodes = (prop) => {
    const { seasons } = prop
    if (!Array.isArray(seasons)) {
      return null; // Return early if seasons is not an array
    }
  
    return (
      <div>
        {seasons.map((season) => (
          <List key={season.season} sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem>
              <ListItemText primary={`Season ${season.season}`} />
            </ListItem>
            {season.episodes.map((episode) => (
                <>
                <ListItem button key={episode.episode}>
                  <ListItemText primary={episode.title} />
                </ListItem>
                <Divider />
                </>
              ))}
            
          </List>
        ))}
      </div>
    );
  };
 
  export default PodcastEpisodes 