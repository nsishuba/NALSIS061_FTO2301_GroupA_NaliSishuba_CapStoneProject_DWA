import { Stack, Button } from "@mui/material"
import genres from "../genres.js"

const CategoryList = () => {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="center">
            {genres.map((genre) => {
                return (
                    <Button key={genre.id} variant="contained" color="warning"
                    sx={{ width: "20vh", height: "10vh" }}
                    >
                    {genre.title}
                    </Button>
                )
            })}
        </Stack>
    )
}

export default CategoryList