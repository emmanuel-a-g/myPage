import styles from "./aboutMe.module.css";
function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <h5 className={styles.hi}>Hi, my name is</h5>
      <h1 className={styles.name}>Emmanuel Garcia.</h1>
      <p className={styles.text}>
        Emmanuel Garcia. I am a full-stack web developer! and always seek to
        learn new technologies!
      </p>
    </div>
  );
}

export default AboutMe;
