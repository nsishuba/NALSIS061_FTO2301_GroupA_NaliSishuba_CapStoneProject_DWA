import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import PodcastCard from "../componenets/PodcastCard";
import data from "../data.js";

const PodcastList = () => {
  const podcasts = data.map((item) => {
    return <PodcastCard key={item.id} image={item.image} title={item.title} />;
  });

  return (
    <Container>
      <Grid container>{podcasts}</Grid>
    </Container>
  );
};

export default PodcastList;
