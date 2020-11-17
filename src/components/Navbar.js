import React, {useState} from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {FaAlignRight} from "react-icons/fa"
// import { Link } from "gatsby"

import styles from "../css/navbar.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/chitroen2.svg"
// import logo from "../images/logo.svg"

export const Navbar = () => {
  const [isNavOpen,
    setNavOpen] = useState(false)

  const toggleNavOpen = () => {
    setNavOpen(isNavOpen => !isNavOpen)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to='/'><img
            src={logo}
            alt="Chitour logo"
            style={{
      width: '45px',
      borderRadius: '3px'
    }}/></AniLink>
          <button className={styles.logoBtn} onClick={toggleNavOpen}>
            <FaAlignRight className={styles.logoIcon}/>
          </button>
        </div>
        <ul
          className={isNavOpen
          ? `${styles.navLinks} ${styles.showNav}`
          : `${styles.navLinks}`}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink fade to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
