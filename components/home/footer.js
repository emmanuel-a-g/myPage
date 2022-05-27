import styles from "./footer.module.css";
import { useMyContext } from "../context/myContext";
import Flash from "react-reveal/Flash";
import { useState } from "react";
function Footer() {
  const [hoverCount, setHoverCount] = useState(0);
  const { highContrastStatus, updateView } = useMyContext();
  function handleScrollUp() {
    updateView(4);
    setTimeout(() => {
      updateView(0);
    }, 100);
  }
  function handleHoverCount() {
    setHoverCount((prev) => prev + 1);
  }
  return (
    <footer className={styles.footer}>
      <p>
        <img
          src={highContrastStatus? "./up.png" : "./upC.png"}
          width={24}
          height={24}
          alt="Arrow image to scroll to top of page"
          onClick={handleScrollUp}
        />
      </p>
      <Flash ssrFadeout spy={hoverCount}>
        <p onMouseOver={handleHoverCount}>
          <a
            title="Link to this website Github Repo"
            href="https://github.com/emmanuel-a-g/myPage"
            target="_blank"
            style={
              highContrastStatus ? { color: "#be0d0c" } : { color: "white" }
            }
          >
            Created by Emmanuel Garcia
          </a>
        </p>
      </Flash>
    </footer>
  );
}

export default Footer;