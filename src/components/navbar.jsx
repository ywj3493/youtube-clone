import React, { memo, useRef } from "react";
import { searchYoutube } from "../libs/youtubeApis";

const Navbar = memo((props) => {
  const { setVideoList } = props;

  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.dir("onSubmit");
    searchYoutube(inputRef.current.value, setVideoList);
  };

  return (
    <nav>
      <form onSubmit={onSubmit}>
        <img src=""></img>
        <span>YouTubeClone</span>
        <input ref={inputRef}></input>
        <button>
          <i className="fas fa-leaf"></i>
          search
        </button>
      </form>
    </nav>
  );
});

export default Navbar;
