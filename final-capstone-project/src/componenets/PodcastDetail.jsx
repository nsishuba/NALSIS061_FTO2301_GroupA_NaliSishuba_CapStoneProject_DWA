import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Stack, Box, Card, CardMedia, Typography, Button, CircularProgress} from "@mui/material"
import CardContent from '@mui/material/CardContent'
import SeasonsDropdown from "./SeasonsDropdown"

const PodcastDetail = () => {
    const [podcastDetail, setPodcastDetail] = useState({})
    const [seasons, setSeasons] = useState([])
    const [loading, setLoading] = useState(true)
    const [showFullDescription, setShowFullDescription] = useState(false)
    const { id } = useParams();

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        fetch(`https://podcast-api.netlify.app/id/${id}`)
        .then(res => res.json())
        .then(data => {setPodcastDetail(data)
        setSeasons(data.seasons)
        setTimeout(() => {
        setLoading(false)
        }, 500);})
    }, [id])

    if(loading) {
        return (
          <Box sx={{ display: "flex", mx: "45%", mt: 25 }}>
          <CircularProgress color="secondary"/>
        </Box>
        )
      }

    const showDescription = () => {
        setShowFullDescription((prevState) => !prevState)
    }
    
    const cutDescription = podcastDetail.description.slice(0, 500)
  
  return (
    <Stack flexDirection="column">
        <Button variant="outlined" color="secondary" 
                    sx={{ width: 100, mt: 4, ml: { xs: 2, sm: 4}}}
                    onClick={goBack}>Back</Button>
        <Card sx={{ display: 'flex', 
                    width: {sm: "auto", xs: "auto"},    
                    height: {md: "auto", xs: "49vh"}, 
                    m: {sm: 4, xs: 2} 
                }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto',  }}>
                <Typography component="div" variant="h5" mb={3}>
                    {podcastDetail.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {showFullDescription ? podcastDetail.description : cutDescription}
                {podcastDetail.description.length > 500 && (
                    <Button variant="text" onClick={showDescription} color="secondary">
                        {showFullDescription ? "show less" : "show more"}
                    </Button>
                )}
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
        <SeasonsDropdown seasons={seasons}/>
    </Stack>
    
  );
}

export default PodcastDetail