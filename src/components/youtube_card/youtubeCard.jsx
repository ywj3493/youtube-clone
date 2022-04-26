import React from "react";
import styles from "./youtubeCard.module.css";

const YoutubeCard = ({ key, title, channelTitle, src, onClickCard }) => {
  const onClickTemp = () => {
    console.dir("onClickCard");
  };

  return (
    <li key={key} className={styles.card} onClick={onClickCard ?? onClickTemp}>
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
