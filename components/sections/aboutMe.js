import styles from "./aboutMe.module.css";
import { useMyContext } from "../context/myContext";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useState, useEffect } from "react";
function AboutMe() {
  const { highContrastStatus } = useMyContext();
  const [clicks, setClicks] = useState(0);
  function handleClick() {
    setClicks((prev) => prev + 1);
  }
  useEffect(() => {
    handleClick();
  }, [])

  return (
    <div className={styles.aboutMe}>
      <Fade ssrFadeout top big>
        <h3
          className={styles.title}
          style={
            highContrastStatus ? { color: "#be0d0c" } : { color: "#00ffd5" }
          }
        >
          <span className={styles.number}>01.</span> About Me
        </h3>
      </Fade>
      <div className={styles.theGrid}>
        <div className={styles.left}>
          <p
            className={styles.text}
            style={highContrastStatus ? { color: "black" } : { color: "white" }}
          >
            Hello my name is Emmanuel and I am a full stack web developer from
            El Paso, Texas. My coding journey began back in 2019 when I picked up
            Python. I enjoyed building a small game, and that's when I 
            decided to dive deep into software development!
            The rest is history.
          </p>
          <p
            className={styles.text}
            style={highContrastStatus ? { color: "black" } : { color: "white" }}
          >
            Today I enjoy building apps and deploying them. I am always eager to
            learn new tech and create cool apps both in a team or individually.
          </p>
          <p
            className={styles.text}
            style={highContrastStatus ? { color: "black" } : { color: "white" }}
          >
            I am experienced in the MERN stack, (Mongodb, Express, React,
            Node.js) but also have experience with google's Firebase-SDK and
            MySQL.
          </p>
        </div>
        <Zoom ssrFadeout left cascade>
          <div className={styles.technologies}>
            <span className={styles.item}>Next.js</span>
            <span className={styles.item}>JavaScript</span>
            <span className={styles.item}>React</span>
            <span className={styles.item}>Node.js</span>
            <span className={styles.item}>Mongodb</span>
            <span className={styles.item}>Express</span>
          </div>
        </Zoom>
        <div className={styles.right}>
            <Tada ssrFadeout spy={clicks}>
              <img
                className={styles.image}
                src="./hook300.jpg"
                alt="Picture of Emmanuel"
                width="270"
                height="316"
                onMouseOver={handleClick}
              />
            </Tada>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;