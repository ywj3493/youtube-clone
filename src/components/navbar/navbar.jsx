import React, { memo, useRef } from "react";
import styles from "./navbar.module.css";

const Navbar = memo(({ searchCallback, search }) => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    search(inputRef.current.value, searchCallback);
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
