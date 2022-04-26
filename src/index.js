import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";

//한번만 만들어서 props 로 전달
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
