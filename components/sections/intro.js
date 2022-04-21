import styles from "./intro.module.css";
function Intro() {
  return (
    <div className={styles.introMe}>
      <h5 className={styles.hi}>Hi, my name is</h5>
      <h1 className={styles.name}>Emmanuel Garcia.</h1>
      <h1 className={styles.name}>I am fullstack web developer.</h1>
      <p className={styles.text}>
        Emmanuel Garcia. I am a full-stack web developer!
      </p>
    </div>
  );
}

export default Intro;
