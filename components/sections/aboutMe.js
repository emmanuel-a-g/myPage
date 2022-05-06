import styles from "./aboutMe.module.css";
import { useMyContext } from "../context/myContext";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";
import { useState } from "react";
function AboutMe() {
  const { highContrastStatus } = useMyContext();
  const [clicks, setClicks] = useState(0);
  function handleClick() {
    setClicks((prev) => prev + 1);
  }

  return (
    <div className={styles.aboutMe}>
      <h3
        className={styles.title}
        style={highContrastStatus ? { color: "#be0d0c" } : { color: "#00ffd5" }}
      >
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
            back in 2019 with which I made a small game, from there I decided to
            dive deep into web development! The rest is history as they say.
          </p>
          <p
            className={styles.text}
            style={highContrastStatus ? { color: "black" } : { color: "white" }}
          >
            Today I enjoy building apps and deploying. I am always eager to
            learn new tech and create cool apps both in a team or individually.
          </p>
          <p
            className={styles.text}
            style={highContrastStatus ? { color: "black" } : { color: "white" }}
          >
            I am experienced in the MERN stack, (Mongodb, Express, React,
            Node.js) but also have experience wit google's FirebaseSDK and
            MySQL.
          </p>
        </div>
        <div className={styles.technologies}>
          <Fade ssrFadeout left big>
            <span className={styles.item}>Next.js</span>
            <span className={styles.item}>JavaScript</span>
            <span className={styles.item}>React</span>
          </Fade>
          <Fade ssrFadeout right big>
            <span className={styles.item}>Node.js</span>
            <span className={styles.item}>MongoDb</span>
            <span className={styles.item}>Express</span>
          </Fade>
        </div>
        <div className={styles.right}>
          <Tada ssrFadeout spy={clicks}>
            <img
              className={styles.image}
              src="./arturo39.png"
              alt="A picture of Emmanuel garcia at graduation!"
              width="282"
              height="302"
              onClick={handleClick}
            />
          </Tada>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
