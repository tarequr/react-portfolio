import React, { useState } from 'react'

import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>

      <div className={styles.menu}>
        <img className={styles.menuBtn} src={
          menuOpen 
          ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png') 
        } 
        alt="menu-button" 
        onClick={() => setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItmes} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Exprience</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar