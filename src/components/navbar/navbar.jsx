import React, { memo, useEffect, useRef } from "react";
import Youtube from "../../service/youtube";
import styles from "./navbar.module.css";

const Navbar = memo(({ setVideoList, search }) => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.dir("onSubmit");
    search(inputRef.current.value, setVideoList);
  };

  return (
    <header>
      <form className={styles.navbar} onSubmit={onSubmit}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="logo"></img>
          <h1>YouTubeClone</h1>
        </div>
        <input
          className={styles.input}
          ref={inputRef}
          placeholder="Search"
        ></input>
        <button className={styles.button}>
          <img
            className={styles.buttonImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </form>
    </header>
  );
});

export default Navbar;
