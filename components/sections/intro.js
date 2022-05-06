import styles from "./intro.module.css";
import { useMyContext } from "../context/myContext";
import Fade from "react-reveal/Fade";

function Intro() {
  const { highContrastStatus } = useMyContext();
  return (
    <div className={styles.introMe}>
      <Fade ssrFadeout bottom big>
        <h5
          className={styles.hi}
          style={highContrastStatus ? { color: "black" } : { color: "white" }}
        >
          Hi, my name is
        </h5>
        <h1
          className={styles.name}
          style={highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }}
        >
          Emmanuel Garcia
        </h1>
        <h1
          className={styles.nameTwo}
          style={
            highContrastStatus ? { color: "#be0d0c" } : { color: "#00ffd5" }
          }
        >
          I am a fullstack web developer.
        </h1>
        <p
          className={styles.text}
          style={highContrastStatus ? { color: "black" } : { color: "white" }}
        >
          Welcome to my hub! I'm glad you're here. I am currently open for new
          opportunities, please feel free to contact me through LinkedIn.
        </p>
      </Fade>
    </div>
  );
}

export default Intro;
