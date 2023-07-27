import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Stack, Box, Card, CardMedia, Typography} from "@mui/material"
import CardContent from '@mui/material/CardContent';
import PodcastEpisodes from "./PodcastEpisodes" 

const PodcastDetail = () => {
    const [podcastDetail, setPodcastDetail] = useState({})
    const [seasons, setSeasons] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://podcast-api.netlify.app/id/${id}`)
        .then(res => res.json())
        .then(data => {setPodcastDetail(data)
        setSeasons(data.seasons)})
    }, [id])

    console.log(podcastDetail)
  return (
    <Stack flexDirection="column">
        <Card sx={{ display: 'flex', 
                    width: {sm: "auto", xs: "auto"},    
                    height: {md: "auto", xs: "49vh"}, 
                    m: {sm: 4, xs: 2} 
                }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5" mb={3}>
                    {podcastDetail.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {podcastDetail.description}
                </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: {md: 300, xs: 100}, height: {md: 300, xs: 100} }}
                image={podcastDetail.image}
                alt="Live from space album cover"
            />
        </Card>
        <PodcastEpisodes seasons={seasons} />
    </Stack>
    
  );
}

export default PodcastDetail