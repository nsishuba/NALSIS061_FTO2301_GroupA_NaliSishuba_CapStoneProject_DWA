import Grid from "@mui/material/Grid";
import PodcastCard from "./PodcastCard";
import { Container } from "@mui/material";

const Podcasts = (prop) => {
  const { selectedGenre, podcastData } = prop

  const filteredPodcasts = selectedGenre ?
                podcastData.filter(podcast => podcast.genres.includes(selectedGenre))
                : podcastData;

  if (selectedGenre.length === 0) {
    return <p>No podcasts found for the selected genre.</p>
  }

  console.log(filteredPodcasts)
  const podcastList = filteredPodcasts.map((podcast) => {
    return (
            <Grid item key={podcast.id} xs={12} sm={4} md={2} >
                <PodcastCard image={podcast.image} 
                             title={podcast.title} 
                             handleClick 
                />
            </Grid>
        ) 
  });

  return (
    <Container>
        <Grid container 
              spacing={3}
              justifyContent="center"
              alignItems="strech">
            {podcastList}
        </Grid>
    </Container>
  );
};

export default Podcasts;
