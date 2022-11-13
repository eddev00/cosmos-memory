import React from 'react'
import style from './Header.module.css'
//import components
import github from '../images/github.svg'
import linkendin from '../images/linkedin.svg'
import hero from '../images/Hero.gif'

//import link
import {Link} from 'react-router-dom'

function Header() {
  return (
     <header className={style.wrapper}>
          <div className={style.logo}>
            Cosmos Memory
          </div>
          <div className={style.socials_wrapper}>
            <span>connect with me --</span>
            <img src={github} alt="" />
            <img src={linkendin} alt="" />
          </div>
     </header>
  )
}

export default Header