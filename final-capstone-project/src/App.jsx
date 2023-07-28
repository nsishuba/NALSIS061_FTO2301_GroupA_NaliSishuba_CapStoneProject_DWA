import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box, CircularProgress } from "@mui/material"
import Feed from "./componenets/Feed"
import Navbar from "./componenets/Navbar"
import Podcasts from "./componenets/Podcasts"
import PodcastDetail from "./componenets/PodcastDetail"
import { useState, useEffect } from "react";
import Fuse from 'fuse.js'
// import SignIn from "./pages/SignIn"
import "./App.css"

const App = () => {
  const [podcastData, setPodcastData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
        .then(res => res.json())
        .then(data => {
          setPodcastData(data)
          setTimeout(() => {
            setLoading(false)
            }, 500); })
  }, [])

  if(loading) {
    return (
      <Box sx={{ display: "flex", mx: "45%", mt: 25 }}>
      <CircularProgress color="secondary"/>
    </Box>
    )
  }

    const fuse = new Fuse(podcastData, {
      keys: [
        "id",
        "title", 
        "updated"
      ],
      includeScore: false
    })


  return (
    <BrowserRouter>
      <Box sx={{ backgroundClip: "#000" }}>
        <Navbar fuse={fuse} podcastData={podcastData}/>
        <Routes>
          {/* <Route path="" element={<SignIn />}/> */}
          <Route path="/" element={<Feed podcastData={podcastData} />} />
          <Route path="/shows" element={<Podcasts />} />
          <Route path="/id/:id" element={<PodcastDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;
