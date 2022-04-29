import styles from "./navigation.module.css";
import { useMyContext } from "../context/myContext";
import { useState, useEffect } from "react";
function Navigation() {
  const { updateView, handleHighContrast, highContrastStatus } = useMyContext();
  const [sideBar, setSideBar] = useState(false);
  const [width, setWidth] = useState(null);
  const breakpoint = 500;
  useEffect(() => {
    if (width === null) {
      setWidth(window.innerWidth);
    }
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  function handleSideBar() {
    setSideBar((prev) => !prev);
  }
  function handleSideAndScroll(num) {
    () => handleSideBar();
    updateView(num);
  }
  const desktop = (
    <ul className={styles.navList}>
      <li className={styles.navItem} onClick={() => updateView(1)}>
        <span className={styles.number}>01.</span> About
      </li>
      <li className={styles.navItem} onClick={() => updateView(2)}>
        <span className={styles.number}>02.</span> Apps
      </li>
      <li className={styles.navItem} onClick={() => updateView(4)}>
        <span className={styles.number}>03.</span> Contact
      </li>
      <li className={styles.navItem}>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vQ0gHRDABIHb4v7LB_LRJII3mfFYVUgIwTHyBGrzk7uOKYo1Pw_OsZKlkTIxKDadAOd6VpPLgU1eDLN/pub"
          target="_blank"
        >
          <button className={styles.button}>Resume</button>
        </a>
      </li>
      <li className={styles.navItem}>
        <button className={styles.buttonColor} onClick={handleHighContrast}>
          HC
        </button>
      </li>
    </ul>
  );
  const mobile = (
    <div className={styles.flexMobileRight}>
      <ul className={styles.navListMobile}>
        <li className={styles.navItem}>
          <button className={styles.buttonColor} onClick={handleHighContrast}>
            HC
          </button>
        </li>
        <li className={styles.hamburgerItem} onClick={handleSideBar}>
          <img
            src="./menu.png"
            alt="Menu icon, open to expand"
            width="28"
            height="28"
          />
        </li>
        <aside
          className={sideBar ? styles.activeSide : styles.side}
          onClick={handleSideBar}
        >
          <ul className={styles.drawer}>
            <span onClick={() => handleSideAndScroll(1)}>
              <li className={styles.navItemSide}>1. </li> About
            </span>
            <span onClick={() => handleSideAndScroll(2)}>
              <li className={styles.navItemSide}>2. </li> Apps
            </span>
            <span onClick={() => handleSideAndScroll(4)}>
              <li className={styles.navItemSide}>3. </li> Contact
            </span>
            <span id={styles.specialSpan}>
              <li className={styles.navItemSide}>
                <a
                  href="https://docs.google.com/document/d/e/2PACX-1vQ0gHRDABIHb4v7LB_LRJII3mfFYVUgIwTHyBGrzk7uOKYo1Pw_OsZKlkTIxKDadAOd6VpPLgU1eDLN/pub"
                  target="_blank"
                >
                  <button className={styles.buttonDrawer}>Resume</button>
                </a>
              </li>
            </span>
            <span
              style={{fontSize: "1.3rem", width: "50%", padding: "1px"}}
              onClick={() =>
                window.open(
                  "https://nextjs-blog-one-mu-75.vercel.app/",
                  "_blank"
                )
              }
            >
            <img src="./link.png" width="22" height="22" alt="external link to my blog"/><li className={styles.navItemSide} style={{fontSize: "1.75rem"}}> Blog </li>2.0
            </span>
          </ul>
        </aside>
      </ul>
    </div>
  );
  // <li className={styles.navItem} onClick={() => updateView(3)}>
  // <span className={styles.number}>03.</span> Education
  // </li>
  return (
    <nav
      className={styles.navigation}
      style={
        highContrastStatus
          ? { backgroundColor: "#5f5e5e" }
          : { backgroundColor: "#003b59" }
      }
    >
      <div className={styles.imageDiv}>
        <img
          className={styles.image}
          src="./emmanuelCircle.png"
          alt="Picture of Emmanuel G"
          onClick={() => updateView(0)}
          width="40"
          height="40"
        />
      </div>
      {width > breakpoint ? desktop : mobile}
    </nav>
  );
}

export default Navigation;
