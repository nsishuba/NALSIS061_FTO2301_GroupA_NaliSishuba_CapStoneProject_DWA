import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import Feed from "./componenets/Feed"
import Navbar from "./componenets/Navbar"
import { useState, useEffect } from "react";
import "./App.css"


const App = () => {

  const [podcastData, setPodcastData] = useState([])

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
        .then(res => res.json())
        .then(data => setPodcastData(data))
  }, [])

  return (
    <BrowserRouter>
      <Box sx={{ backgroundClip: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed podcastData={podcastData} />} />
          {/* <Route path="/id/<ID>" exact element={<PodcastInfo />} /> */}
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;
