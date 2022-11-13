import React from "react";
import style from "./Loading.module.css";
import warp from "../images/warp.gif";
function Loading() {
  return (
    <div className={style.container}>
      <img src={warp} alt="" />
      <h2>Loading...</h2>
    </div>
  );
}

export default Loading;
