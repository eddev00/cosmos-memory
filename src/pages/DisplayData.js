import React from "react";
import style from './DisplayData.module.css'
import img from '../images/ze.png'
function DisplayData() {
  return (
     <div className={style.container}>
         <div className={style.title}>
         Blood Moon, Ice Giant

         </div>
         <div className={style.content}>
          <div className={style.left}>
            <h2>Explanation:</h2>
            <p>On November 8 the Full Moon turned blood red as it slid through Earth's shadow in a beautiful total lunar eclipse. During totality it also passed in front of, or occulted, outer planet Uranus for eclipse viewers located in parts of northern America and Asia. For a close-up and wider view these two images were taken just before the occultation began, captured with different telescopes and cameras from the same roof top in Shanghai, China. Normally very faint compared to a Full Moon, the tiny, pale, greenish disk of the distant ice giant is just to the left of the Moon's edge and about to disappear behind the darkened, red lunar limb. Though only visible from certain locations across planet Earth, lunar occultations of planets are fairly common. But for this rare \"lunar eclipse occultation\" to take place, at the time of the total eclipse the outer planet had to be both at opposition and very near the ecliptic plane to fall in line with Sun, Earth, and Moon. Lunar Eclipse of November 2022: Notable Submissions to APOD Love Eclipses? (US): Apply to become a NASA Partner Eclipse Ambassador.
</p>
          </div>
          <div className={style.right}>
            <img src={img} alt="" />
          </div>
         </div>
         <div className={style.footer}>
          <div className={style.credits}>
            copyright: 
          </div>
          <div className={style.switch}>
               <div className={style.prev}>
                Prev Day
               </div>
               <div className={style.choose_date}>
               Choose Date
               </div>
               <div className={style.next}>
                Next Day
               </div>
          </div>
          <div className={style.date}>
            12/20/2000 
          </div>
         </div>
     </div>
  )
}

export default DisplayData;
