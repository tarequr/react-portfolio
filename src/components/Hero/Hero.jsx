import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Sabbir</h1>
            <p className={styles.description}>I'm a full-stack web developer with 3 years of experience React and Laravel framework. React out if you'd like to learn more!</p>
            <a href="mailto:tarequrrahman@example.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')}  alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero