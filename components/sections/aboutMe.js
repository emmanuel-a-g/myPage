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
            Paso, Texas. My coding journey began when I first learned Python
            back in 2019 with which I made a small text game, and from then I
            became so hooked that I decided to learn JavaScript! The rest is history.
          </p>
          <p className={styles.text}>
            Today I enjoy building apps and deploying them to the web, I am
            excited to learn new tech and see what I can build individually or
            in a team.
          </p>
          <p className={styles.text}>
            I am experienced in the MERN stack, (Mongodb, Express, React,
            Node.js) but also have experience with FirebaseSDK, MySQL.
          </p>
        </div>
        <div className={styles.technologies}>
          <span className={styles.item}>Next.js</span>
          <span className={styles.item}>JavaScript (ES6+)</span>
          <span className={styles.item}>React</span>
          <span className={styles.item}>Node.js</span>
          <span className={styles.item}>MongoDb</span>
          <span className={styles.item}>Express</span>
        </div>
        <div className={styles.right}>
          <img
            className={styles.image}
            src="./arturo.png"
            alt="A picture of Emmanuel garcia at graduation!"
          />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
