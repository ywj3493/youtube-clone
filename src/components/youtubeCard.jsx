import React from "react";

const YoutubeCard = (props) => {
  const { key, name, src, onClickCard } = props;

  const onClickTemp = () => {
    console.dir("onClickCard");
  };

  return (
    <li key={key} onClick={onClickCard ?? onClickTemp}>
      <span>
        <img src={src} alt="" />
      </span>
      {name}
    </li>
  );
};

export default YoutubeCard;
