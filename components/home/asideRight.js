import { useMyContext } from "../context/myContext";
import styles from "./asideRight.module.css";
import Fade from "react-reveal/Fade";
function AsideRight() {
  const { highContrastStatus } = useMyContext();
  return (
    <div className={styles.asideRight}>
      <Fade ssrFadeout bottom big>
        <p
          style={highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }}
          className={styles.myEmail}
        >
          <a href="mailto:earturoga@gmail.com">
          earturoga@gmail.com
          </a>
        </p>
      </Fade>
    </div>
  );
}

export default AsideRight;
