import React from "react";
import style from "./Datepick.module.css";
import travel from "../images/travel.gif";
function Datepick() {
  return <div className={style.container}>
          <div className={style.date}>
            <span>Where to ?</span>
            <h2>DD:MM:YYYY</h2>
          </div>
          <img src={travel} alt="" />
  </div>;
}

export default Datepick;
