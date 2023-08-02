import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./componenets/Home"
import PodcastDetail from "./componenets/PodcastDetail"
import Navbar from "./componenets/Navbar"
import "./App.css"
import PodcastEpisode from "./componenets/PodcastEpisodeCard"

const App = () => {

  return (
    <BrowserRouter>  
      <Navbar />
        <Routes>
          {/* <Route path="" element={<SignIn />}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/id/:id" element={<PodcastDetail /> } />
          <Route path="/espisode/:episodeId" element={<PodcastEpisode /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
