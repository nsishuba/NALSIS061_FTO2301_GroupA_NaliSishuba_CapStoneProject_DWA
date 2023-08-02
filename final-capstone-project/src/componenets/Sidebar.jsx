import { Stack, Button } from "@mui/material";
// import { styled } from '@mui/material/styles';

const Sidebar = (prop) => {
    const { genreData, onSelect } = prop

    return (
            <Stack direction="row" sx={{ overflowY: "auto",
                                         height: { sx: "auto", md: "95%" },
                                         flexDirection: { md: "column" } }}>
                <Button color="secondary" sx={{ height: { xs: "auto", md: "100%"},
                                                mx: { xs: 1 },
                                                px: 7,
                                                borderRadius: "10px",
                                               }}
                        /**
                         * pass the function instead of calling it so the function is not
                         * being called everytime the component renders
                         */
                        onClick={() => onSelect("")} >
                    All
                </Button>
                {genreData.map((genre) => {
                    return (
                        <Button color="secondary" sx={{ height: { xs: "auto", md: "100%"},
                                                        mx: { xs: 1 },
                                                        px: 7,
                                                        borderRadius: "10px" }}
                                key={genre.id}
                                onClick={() => onSelect(genre)}>
                            {genre.title.slice(0, 28)} 
                        </Button>
                    )
                })}

        </Stack>
    )
} 

export default Sidebar