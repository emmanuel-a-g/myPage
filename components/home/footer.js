import styles from "./footer.module.css";
import { useMyContext } from "../context/myContext";
function Footer() {
  const { highContrastStatus, updateView } = useMyContext();
  function handleScrollUp() {
    updateView(4);
    setTimeout(() => {
      updateView(0);
    }, 100);
  }
  return (
    <footer className={styles.footer}>
      <p>
        <img
          src="./upArrow.png"
          width="20"
          heigh="20"
          alt="Arrow image to scroll to top of page"
          onClick={handleScrollUp}
        />
      </p>
      <p>
        <a
          title="Link to this website Github Repo"
          href="https://github.com/emmanuel-a-g/myPage"
          target="_blank"
          style={highContrastStatus ? { color: "#be0d0c" } : { color: "white" }}
        >
          Created by Emmanuel Garcia
        </a>
      </p>
    </footer>
  );
}

export default Footer;
