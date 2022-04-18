import styles from "./main.module.css";
import AboutMe from "../sections/aboutMe";
import Intro from "../sections/intro";
function Main() {
  return (
    <div className={styles.middleScroll}>
      <div className={styles.gap}>
      <Intro/>
      <AboutMe />
      </div>
    </div>
  );
}

export default Main;
