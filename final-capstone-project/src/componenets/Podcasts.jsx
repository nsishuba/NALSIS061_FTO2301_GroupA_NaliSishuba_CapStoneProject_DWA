import PodcastCard from "./PodcastCard";
import { Stack, Box } from "@mui/material";

const Podcasts = (prop) => {
  const { selectedGenre, filteredPodcasts } = prop

  if (selectedGenre.length === 0) {
    return <p>No podcasts found for the selected genre.</p>
  }

  const podcastList = filteredPodcasts.map((podcast) => {
    return (
            <Box key={podcast.id}>
                <PodcastCard 
                             podcastID={podcast.id}
                             image={podcast.image} 
                             title={podcast.title} 
                />
            </Box>
        ) 
  });

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={6}>
            {podcastList}
    </Stack>
  );
};

export default Podcasts;
