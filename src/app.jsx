import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Navbar from "./components/navbar/navbar";
import YoutubeBoard from "./components/youtube_board/youtubeBoard";
import Youtube from "./service/youtube";

function App({ youtube }) {
  const [videoList, setVideoList] = useState([]);

  const search = (q) => {
    youtube.search(q, setVideoList);
  };

  useEffect(() => {
    youtube.mostPopular(setVideoList);
  }, []);

  return (
    <div className={styles.app}>
      <Navbar setVideoList={setVideoList} search={search} />
      <YoutubeBoard videoList={videoList} />
    </div>
  );
}

export default App;
