import styles from "./aside.module.css";
import { useMyContext} from "../context/myContext";
function Aside() {
  const { highContrastStatus } = useMyContext();
  return (
    <aside className={highContrastStatus ? styles.theAsideContrast : styles.theAside}>
      <div className={styles.socialMedia}>check out:
        <a className={styles.anchor} href="https://github.com/emmanuel-a-g" target="_blank">
        <img src="./github.png" alt="github icon, click to open my github!"/>
        </a>
        <a className={styles.anchor} href="https://linkedin.com/in/emmanuel-a-g" target="_blank">
        <img src="./linked.png" alt="linkedIn icon, click to open my linkedIn!"/>
        </a>
      </div>
    </aside>
  )
}

export default Aside;