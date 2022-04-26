import React from "react";
import styles from "./youtubeCard.module.css";

const YoutubeCard = ({
  video,
  onClickCard,
  display,
  src,
  video: {
    snippet: { title, channelTitle },
  },
}) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.card} ${displayType}`}
      onClick={() => onClickCard(video)}
    >
      <div className={styles.video}>
        <img className={styles.image} src={src} alt="video thumbnail" />
        <div>
          <h4 className={styles.title}>{title}</h4>
          <h5 className={styles.channelTitle}>{channelTitle}</h5>
        </div>
      </div>
    </li>
  );
};

export default YoutubeCard;
