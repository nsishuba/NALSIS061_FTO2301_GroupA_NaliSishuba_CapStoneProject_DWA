import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PodcastCard = (prop) => {
    return (
        <div>
           <Card sx={{ maxWidth: 225,  borderRadius: 3 }}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 200 }}
                    image={prop.image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {prop.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        </div>
    )
}

export default PodcastCard