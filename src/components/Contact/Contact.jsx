import React from 'react'

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

function Contact() {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:myemail@email.com">myemail@email.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://bd.linkedin.com/in/tarequrrahmansabbir">linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon" />
                <a href="https://github.com/tarequr">github.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact