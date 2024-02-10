// src/Profile.js

import React from 'react';
import styles from './Profile.module.css';
import logo from './LOGOMM.webp';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        {/* Tekst nałożony na obraz */}
        <div className={styles.overlayText}>
          <h1 className={styles.header}>Maciej Macheta</h1>
          <p className={styles.subheader}>Take everything what you want from this site</p>
        </div>
      </div>

      <iframe
        height="300"
        width="100%"
        className={styles.iframe}
        scrolling="no"
        data-default-tab="js,result"
        title="Hover text &quot;GLITCH&quot; effect"
        src="https://codepen.io/MaciejMacheta/embed/ExMdyvQ?height=265&theme-id=dark&default-tab=js,result"
        frameBorder="no"
        allowFullScreen={true}>
      </iframe>

      <iframe
        height="300"
        width="100%"
        className={styles.iframe}
        data-default-tab="js,result"
        scrolling="no"
        title="F5 Magic trail effect"
        src="https://codepen.io/MaciejMacheta/embed/vYPVXLO?height=265&theme-id=dark&default-tab=js,result"
        frameBorder="no"
        allowFullScreen={true}>
      </iframe>

    </div>
  );
}

export default Profile;