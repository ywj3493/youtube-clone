import React from "react";
import YoutubeCard from "../youtube_card/youtubeCard";
import styles from "./youtubeBoard.module.css";

const YoutubeBoard = (props) => {
  const { videoList } = props;

  return (
    <ul className={styles.board}>
      {videoList
        ? videoList.map((item) => (
            <YoutubeCard
              key={item.id.videoId}
              title={item.snippet.title}
              channelTitle={item.snippet.channelTitle}
              src={item.snippet.thumbnails.default.url}
            />
          ))
        : null}
    </ul>
  );
};

export default YoutubeBoard;
