import React from "react";
import YoutubeCard from "../youtube_card/youtubeCard";
import styles from "./youtubeBoard.module.css";

const YoutubeBoard = ({ videoList, onVideoClick, display }) => {
  return (
    <ul className={styles.board}>
      {videoList
        ? videoList.map((item) => {
            return (
              <YoutubeCard
                key={item.id}
                video={item}
                src={item.snippet.thumbnails.default.url}
                onClickCard={onVideoClick}
                display={display}
              />
            );
          })
        : null}
    </ul>
  );
};

export default YoutubeBoard;
