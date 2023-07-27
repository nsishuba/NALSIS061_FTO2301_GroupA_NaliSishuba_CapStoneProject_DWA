import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import Feed from "./componenets/Feed"
import Navbar from "./componenets/Navbar"
import Podcasts from "./componenets/Podcasts"
import PodcastDetail from "./componenets/PodcastDetail"
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
          <Route path="/" element={<Feed podcastData={podcastData} />} />
          <Route path="/shows" element={<Podcasts />} />
          <Route path="/id/:id" element={<PodcastDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;
