import React from "react";
import style from "./Home.module.css";
import hero from "../images/Hero.gif"
function Home() {
  return <div className={style.container}>
           <div className={style.left}>
               <h1>Discover the cosmos</h1>
               <p>#Each day a different image or 
                photograph of our fascinating
                 universe is featured, along
                  with a brief explanation
                  written by a professional
                   astronomer.
               </p>
               <div className={style.hero_button}>
                Explore
               </div>
           </div>
           <div className={style.right}>
               <img src={hero} alt="" />
               
           </div>
           <div className={style.hero_button_mobile}>
                Explore
               </div>
          </div>;
}

export default Home;
