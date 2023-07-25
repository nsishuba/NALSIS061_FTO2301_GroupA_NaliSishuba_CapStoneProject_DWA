import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import Feed from "./componenets/Feed"
import Navbar from "./componenets/Navbar"
import "./App.css"


const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundClip: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          {/* <Route path="/id/<ID>" exact element={<PodcastInfo />} /> */}
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;
