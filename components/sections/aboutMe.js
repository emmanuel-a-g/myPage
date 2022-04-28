import styles from "./aboutMe.module.css";
import { useMyContext } from "../context/myContext";
function AboutMe() {
  const { highContrastStatus } = useMyContext();
  return (
    <div className={styles.aboutMe}>
      <h3 className={styles.title} style={highContrastStatus? {color: "#be0d0c"} : {color: "#00ffd5"}}>
        <span className={styles.number}>01.</span> About Me
      </h3>
      <div className={styles.theGrid}>
        <div className={styles.left}>
          <p
            className={styles.text}
            style={highContrastStatus ? { color: "black" } : { color: "white" }}
          >
            Hello my name is Emmanuel and I am an web developer native to El
            Paso, Texas. My coding journey began when I first learned Python
            back in 2019 with which I made a small text game, from there I
            decided to dive deep into web development! The rest is history.
          </p>
          <p
            className={styles.text}
            style={highContrastStatus ? { color: "black" } : { color: "white" }}
          >
            Today I enjoy building apps and deploying, I am excited to learn new
            tech and see what I can build individually or in a team.
          </p>
          <p
            className={styles.text}
            style={highContrastStatus ? { color: "black" } : { color: "white" }}
          >
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
            src="./arturo39.png"
            alt="A picture of Emmanuel garcia at graduation!"
            width="282"
            height="302"
          />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
