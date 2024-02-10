import React, { useState } from 'react'; 
import styles from './Profile.module.css';
import logo from './LOGOMM.webp';

function Profile() {
  const [hoverEffectVisible, setHoverEffectVisible] = useState(false);
  const [cursorEffectVisible, setCursorEffectVisible] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.overlayText}>
          <h1 className={styles.header}>Maciej Macheta</h1>
          <p className={styles.subheader}>Take everything what you want from this site</p>
        </div>
      </div>
      <div className={styles.menuContainer}>
        {/* Hover effects */}
        <div className={styles.dropdownItem} onClick={() => setHoverEffectVisible(!hoverEffectVisible)}>
          Hover effects
          <div className={`${styles.subMenu} ${hoverEffectVisible ? styles.show : ''}`}>
            <a onClick={() => setActiveMenuItem('glitch')} href="#glitch">Glitch</a>
          </div>
        </div>

        {/* Cursor effects */}
        <div className={styles.dropdownItem} onClick={() => setCursorEffectVisible(!cursorEffectVisible)}>
          Cursor
          <div className={`${styles.subMenu} ${cursorEffectVisible ? styles.show : ''}`}>
            <a onClick={() => setActiveMenuItem('F5Magic')}href="#magic-cursor">F5 Magic cursor</a>
          </div>
        </div>
      </div>
      {activeMenuItem === 'glitch' && (
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
      )}
{activeMenuItem === 'F5Magic' && (
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
)}
    </div>
  );
}

export default Profile;