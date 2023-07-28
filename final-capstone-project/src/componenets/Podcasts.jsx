import PodcastCard from "./PodcastCard";
import { Stack, Box } from "@mui/material";

  const Podcasts = (prop) => {
    const { selectedGenre, filteredPodcasts, months } = prop
  
    if (!selectedGenre || selectedGenre.length === 0) {
      const allPodcasts = filteredPodcasts.map((podcast) => {
        return (
                <Box key={podcast.id}>
                    <PodcastCard 
                                 podcastID={podcast.id}
                                 image={podcast.image} 
                                 title={podcast.title} 
                                 noOfSeasons={podcast.seasons}
                                 lastUpdated={podcast.updated}
                                 months={months}
                                 genres={podcast.genres}
                    />
                </Box>
            ) 
      })
      return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
                {allPodcasts}
        </Stack>
      );
    }
  
    const podcastList = filteredPodcasts.map((podcast) => {
      return (
              <Box key={podcast.id}>
                  <PodcastCard 
                               podcastID={podcast.id}
                               image={podcast.image} 
                               title={podcast.title} 
                               noOfSeasons={podcast.seasons}
                               lastUpdated={podcast.updated}
                               months={months}
                               genres={podcast.genres}
                  />
              </Box>
          ) 
    });
  
    return (
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
              {podcastList}
      </Stack>
    );
  };

export default Podcasts;
