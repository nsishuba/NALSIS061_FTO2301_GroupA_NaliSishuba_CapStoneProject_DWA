import {Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from "react-router-dom";


const PodcastCard = (prop) => {
    const { podcastID, image, title } = prop

    return (
           <Card sx={{ maxWidth: {md: 225, xs: 180},  borderRadius: 1 }}>
            <Link to={`/id/${podcastID}`}>
                <CardMedia
                    sx={{ width: 181, height: 140 }}
                    image={image}
                    component="img"
                    alt={title}
                />
            </Link>
             <CardContent sx={{ marginLeft: "5px", 
                                backgroundColor: "none", 
                                height: "70px", 
                                width: "170px"
                            }}>
                <Link to={`/id/${podcastID}`} underline="none">
                    <Typography variant="subtitle2" color="#7b1fa2">
                    {title.slice(0, 40)}
                    </Typography>
                </Link>
             </CardContent>
          </Card>
    )
}

export default PodcastCard