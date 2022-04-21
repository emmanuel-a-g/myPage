import styles from "./navigation.module.css";
import { useMyContext } from "../context/myContext";
function Navigation() {
  const { updateView } = useMyContext();
  return (
    <nav className={styles.navigation}>
      <div className={styles.imageDiv}>
        <img
          className={styles.image}
          src="./emmanuelCircle.png"
          alt="Picture of Emmanuel G"
        />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem} onClick={() => updateView(1)}>
          <span className={styles.number}>01.</span> About
        </li>
        <li className={styles.navItem} onClick={() => updateView(2)}>
          <span className={styles.number}>02.</span> Work
        </li>
        <li className={styles.navItem} onClick={() => updateView(3)}>
          <span className={styles.number}>03.</span> Education
        </li>
        <li className={styles.navItem} onClick={() => updateView(4)}>
          <span className={styles.number}>04.</span> Contact
        </li>
        <li className={styles.navItem}>
          <a
            href="https://docs.google.com/document/u/1/d/e/2PACX-1vQ0gHRDABIHb4v7LB_LRJII3mfFYVUgIwTHyBGrzk7uOKYo1Pw_OsZKlkTIxKDadAOd6VpPLgU1eDLN/pub"
            target="_blank"
          >
            <button className={styles.button}>Resume</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
