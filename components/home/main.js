import styles from "./main.module.css";
import AboutMe from "../sections/aboutMe";
import Intro from "../sections/intro";
import Work from "../sections/work";
function Main() {
  return (
    <div className={styles.middleScroll}>
      <div className={styles.gap}>
      <Intro/>
      <AboutMe />
      <Work/>
      </div>
    </div>
  );
}

export default Main;
