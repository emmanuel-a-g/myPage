import Apps from "../apps/apps";
import styles from "./work.module.css";
function Work() {
  return (
    <div className={styles.work}>
      <h3 className={styles.title}>
        <span className={styles.number}>02.</span> Apps
      </h3>
      <div className={styles.theGrid}>
          <Apps name="one"/>
          <Apps name="two"/>
      </div>
    </div>
  );
}

export default Work;
