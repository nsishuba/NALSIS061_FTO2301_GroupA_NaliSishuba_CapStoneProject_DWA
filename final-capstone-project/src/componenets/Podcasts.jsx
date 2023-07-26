import Grid from "@mui/material/Grid";
import PodcastCard from "./PodcastCard";
import data from "../data.js";
import { Container } from "@mui/material";

const PodcastList = () => {
  const podcasts = data.map((item) => {
    return (
            <Grid item key={item.id} xs={12} sm={4} md={2} >
                <PodcastCard image={item.image} 
                             title={item.title} 
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
            {podcasts}
        </Grid>
    </Container>
  );
};

export default PodcastList;
