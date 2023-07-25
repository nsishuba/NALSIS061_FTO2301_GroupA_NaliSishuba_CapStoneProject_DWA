import  { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";

const Feed = () => {
    return (
        <Stack sx={{ flexDirection: { sx: "cloumn", md: "row" }}}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, 
                 borderRight: "1px solid #3d3d3d",
                 px: { sx: 0, md: 2 }}}>

            <Sidebar />
            </Box>
        </Stack>
    )
}

export default Feed