import { useEffect, useState } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import YoutubeBoard from "./components/youtubeBoard";
import { mostPopularYoutube } from "./libs/youtubeApis";

function App() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    mostPopularYoutube(setVideoList);
  }, []);

  return (
    <>
      <Navbar setVideoList={setVideoList} />
      <YoutubeBoard videoList={videoList} />
    </>
  );
}

export default App;
