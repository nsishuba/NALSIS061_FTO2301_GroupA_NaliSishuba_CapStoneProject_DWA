import PodcastCard from "./PodcastCard";
import { Stack, Box } from "@mui/material";

const Podcasts = (prop) => {
  const { selectedGenre, filteredPodcasts } = prop

  if (!selectedGenre || selectedGenre.length === 0) {
    const allPodcasts = filteredPodcasts.map((podcast) => {
      return (
              <Box key={podcast.id}>
                  <PodcastCard 
                               podcastID={podcast.id}
                               image={podcast.image} 
                               title={podcast.title} 
                  />
              </Box>
          ) 
    })
    return (
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={6}>
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
