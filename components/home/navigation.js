import styles from "./navigation.module.css";
function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.imageDiv}>
        <img className={styles.image} src="./emmanuelCircle.png" alt="Picture of Emmanuel G"/>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>01. About</li>
        <li className={styles.navItem}>02. Experience</li>
        <li className={styles.navItem}>03. Work</li>
        <li className={styles.navItem}>04. Contact</li>
        <li className={styles.navItem}>Resume</li>
      </ul>
    </nav>
  );
}

export default Navigation;
