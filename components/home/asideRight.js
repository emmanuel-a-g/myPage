import { useMyContext } from "../context/myContext";
import styles from "./asideRight.module.css";
import Fade from "react-reveal/Fade";
function AsideRight() {
  const { highContrastStatus } = useMyContext();
  return (
    <div className={styles.asideRight}>
      <Fade ssrFadeout bottom big>
      <p style={highContrastStatus ? {color: "white"} : {color: "#7DFDFE"}} className={styles.myEmail}>earturoga@gmail.com</p>
      </Fade>
    </div>
  )
}

export default AsideRight;