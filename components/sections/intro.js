import styles from "./intro.module.css";

function Intro() {
  return (
    <div className={styles.introMe}>
      <h5 className={styles.hi}>Hi, my name is</h5>
      <h1 className={styles.name}>Emmanuel Garcia.</h1>
      <h1 className={styles.nameTwo}>I am fullstack web developer.</h1>
      <p className={styles.text}>
        Welcome to my hub! I'm glad you're here. I am currently open for new opportunities, please
        feel free to contact me through LinkedIn.
      </p>
    </div>
  );
}

export default Intro;
