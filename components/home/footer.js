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
      <img
        src="./upArrow.png"
        width="22"
        heigh="22"
        alt="Arrow image to scroll to top of page"
        onClick={handleScrollUp}
      />
      <a
        title="Link to this website Github Repo"
        href="https://github.com/emmanuel-a-g/myPage"
        target="_blank"
      >
        <p style={highContrastStatus ? { color: "black" } : { color: "white" }}>
          Created by Emmanuel Garcia
        </p>
      </a>
    </footer>
  );
}

export default Footer;
