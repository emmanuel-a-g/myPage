import Aside from "./aside";
import AsideRight from "./asideRight";
import styles from "./hero.module.css";
import Main from "./main";
function Hero() {
  return (
    <div className={styles.hero}>
      <Aside className={styles.left} />
      <Main className={styles.middle} />
      <AsideRight className={styles.right} />
    </div>
  );
}

export default Hero;
