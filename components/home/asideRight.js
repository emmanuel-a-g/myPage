import { useMyContext } from "../context/myContext";
import styles from "./asideRight.module.css";
function AsideRight() {
  const { highContrastStatus } = useMyContext();
  return (
    <div className={styles.asideRight}>
      <p style={highContrastStatus ? {color: "white"} : {color: "#7DFDFE"}} className={styles.myEmail}>earturoga@gmail.com</p>
    </div>
  )
}

export default AsideRight;