import styles from "./footer.module.css";
import { useMyContext } from "../context/myContext";
function Footer() {
  const { highContrastStatus } = useMyContext();
  return (
    <footer className={styles.footer}>
      <a
        title="Link to this website Github Repo"
        href="https://github.com/emmanuel-a-g/myPage"
        target="_blank"
      >
        <p style={highContrastStatus ? { color: "black" } : { color: "white" }}>
          Created by Emmanuel Garcia © 2022
        </p>
      </a>
    </footer>
  );
}

export default Footer;
