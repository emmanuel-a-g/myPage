import styles from "./aside.module.css";
import { useMyContext} from "../context/myContext";
function Aside() {
  const { highContrastStatus } = useMyContext();
  return (
    <aside className={styles.theAside} style={highContrastStatus ? {color: "white"} : {color: "#00ffd5"}}>
      <div className={styles.socialMedia}>check out:
        <a className={styles.anchor} style={highContrastStatus? {backgroundColor: "white", borderRadius: "4px"} : { backgroundColor: "inherit"}} href="https://github.com/emmanuel-a-g" target="_blank">
        <img src="./github.png" alt="github icon, click to open my github!"/>
        </a>
        <a className={styles.anchor} style={highContrastStatus? {backgroundColor: "white"} : { backgroundColor: "inherit"}}  href="https://linkedin.com/in/emmanuel-a-g" target="_blank">
        <img src="./linked.png" alt="linkedIn icon, click to open my linkedIn!"/>
        </a>
      </div>
    </aside>
  )
}

export default Aside;