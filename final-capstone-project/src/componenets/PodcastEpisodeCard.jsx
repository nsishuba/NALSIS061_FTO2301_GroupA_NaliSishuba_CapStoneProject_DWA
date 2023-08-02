import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PodcastEpisodeCard = (prop) => {
    const { episodeNumber, episodeTitle, episodeDescription, episodeFile } = prop

    return (
        <Card sx={{ display: 'flex', m: 0.3, width: {xs: "82vw", md: "auto"}, height: {xs: "50vh", md: "35vh" } }}>
        <Stack sx={{ display: 'flex', flexDirection: {xs: 'column', md: "column"}, width: {xs: "60vw"}}}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="subtitle1">
                {episodeNumber}. {episodeTitle}
            </Typography><br />
            <Typography variant="caption text" color="text.secondary" component="div">
                {episodeDescription}
            </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <audio src={`${episodeFile}`} controls/>
            </Box>
        </Stack>
        {/* <CardMedia
            component="img"
            sx={{ width: 151, ml: "auto" }}
            image="/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
        /> */}
        </Card>
    )
}

export default PodcastEpisodeCard