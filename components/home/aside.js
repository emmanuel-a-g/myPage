import styles from "./aside.module.css";
import { useMyContext } from "../context/myContext";
import Fade from "react-reveal/Fade";
function Aside() {
  const { highContrastStatus } = useMyContext();
  return (
    <aside
      className={styles.theAside}
      style={highContrastStatus ? { color: "white" } : { color: "#7DFDFE" }}
    >
      <Fade ssrFadeout bottom big>
        <div
          className={styles.socialMedia}
          style={highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }}
        >
          links:
          <a
            className={styles.anchor}
            href="https://github.com/emmanuel-a-g"
            target="_blank"
          >
            <img
              src={highContrastStatus ? "./github64x.png" : "./githubC.png"}
              alt="click to open my github!"
              width="28"
              height="28"
            />
          </a>
          <a
            className={styles.anchor}
            href="https://linkedin.com/in/emmanuel-a-g"
            target="_blank"
          >
            <img
              src={highContrastStatus ? "./linked64x.png" : "./linkedC.png"}
              alt="click to open my linkedIn!"
              width="28"
              height="28"
            />
          </a>
        </div>
      </Fade>
    </aside>
  );
}

export default Aside;
