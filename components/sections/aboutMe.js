import styles from "./aboutMe.module.css";
function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <h3 className={styles.title}>
        <span className={styles.number}>01.</span> About Me
      </h3>
      <div className={styles.theGrid}>
        <div className={styles.left}>
          <p className={styles.text}>
            Hello my name is Emmanuel and I am an web developer native to El
            Paso, Texas. My journey started when I first digged into Python back
            in 2019 when I wrote a small text game, and from then I became so
            intriged that I learned JavaScript!
          </p>
          <p className={styles.text}>
            Today I enjoy building apps and deploying them to the internet, I am
            excited to learn more everyday and see what I can build individually
            or in a team.
          </p>
          <p className={styles.text}>
            I am experienced in the MERN stack, (MongoDb, Express, React,
            Node.js) but also have experience using mySQL as well as Google's
            Firebase SDK.
          </p>
          <p className={styles.text}>
            Here are some of the technologies that I've been working with:
          </p>
          <div className={styles.technologies}>
            <span className={styles.item}>Next.js</span>
            <span className={styles.item}>JavaScript (ES6+)</span>
            <span className={styles.item}>React</span>
            <span className={styles.item}>Node.js</span>
            <span className={styles.item}>MongoDb</span>
            <span className={styles.item}>Express</span>
          </div>
        </div>
        <div className={styles.right}>
          <img
            className={styles.image}
            src="./hookEm.png"
            alt="A picture of Emmanuel garcia at graduation!"
          />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
