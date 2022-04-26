import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Navbar from "./components/navbar/navbar";
import YoutubeBoard from "./components/youtube_board/youtubeBoard";
import YoutubeDetail from "./components/youtube_detail/youtubeDetail";
import Youtube from "./service/youtube";

function App({ youtube }) {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSeletedVideo] = useState(null);

  const search = (q) => {
    youtube.search(q, setVideoList);
    setSeletedVideo(null);
  };

  const selectVideo = (video) => {
    console.dir("selectedVideo");
    setSeletedVideo(video);
  };

  useEffect(() => {
    youtube.mostPopular(setVideoList);
  }, []);

  return (
    <div className={styles.app}>
      <Navbar setVideoList={setVideoList} search={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <YoutubeDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.board}>
          <YoutubeBoard
            videoList={videoList}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
