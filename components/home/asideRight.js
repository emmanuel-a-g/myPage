import { useMyContext } from "../context/myContext";
import styles from "./asideRight.module.css";
function AsideRight() {
  const { highContrastStatus } = useMyContext();
  return (
    <div className={styles.asideRight}>
      <p style={highContrastStatus ? {color: "white"} : {color: "#00ffd5"}} className={styles.myEmail}>emmanuelg@utexas.edu</p>
    </div>
  )
}

export default AsideRight;