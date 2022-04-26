import React from "react";
import styles from "./youtubeDetail.module.css";

const YoutubeDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      id="ytplayer"
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{snippet.description}</h2>
    <h3>{snippet.description}</h3>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default YoutubeDetail;
