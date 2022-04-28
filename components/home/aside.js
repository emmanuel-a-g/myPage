import styles from "./aside.module.css";
import { useMyContext} from "../context/myContext";
function Aside() {
  const { highContrastStatus } = useMyContext();
  return (
    <aside className={styles.theAside} style={highContrastStatus ? {color: "white"} : {color: "#7DFDFE"}}>
      <div className={styles.socialMedia}>check out:
        <a className={styles.anchor}  href="https://github.com/emmanuel-a-g"  target="_blank">
        <img src="./github64x.png" alt="github icon, click to open my github!" width="28" height="28"/>
        </a>
        <a className={styles.anchor}  href="https://linkedin.com/in/emmanuel-a-g" target="_blank">
        <img src="./linked64x.png" alt="linkedIn icon, click to open my linkedIn!" width="28" height="28"/>
        </a>
      </div>
    </aside>
  )
}

export default Aside;