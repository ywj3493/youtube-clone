import React from "react";
import YoutubeCard from "./youtubeCard";

const YoutubeBoard = (props) => {
  const { videoList } = props;

  return (
    <ul>
      {videoList
        ? videoList.map((item) => (
            <YoutubeCard
              key={item.id.videoId}
              name={item.snippet.title}
              src={item.snippet.thumbnails.default.url}
            />
          ))
        : null}
    </ul>
  );
};

export default YoutubeBoard;
