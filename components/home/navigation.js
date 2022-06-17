import styles from "./navigation.module.css";
import { useMyContext } from "../context/myContext";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

function Navigation() {
  const {
    updateView,
    handleHighContrast,
    highContrastStatus,
    matrixToggle,
    matrix,
    mobile: mobileStatus,
  } = useMyContext();
  const [sideBar, setSideBar] = useState(false);
  const [width, setWidth] = useState(null);
  const breakpoint = 500;
  const pdfLocation =
    "https://github.com/emmanuel-a-g/resume/raw/main/Emmanuel_Garcia_pdf.pdf";
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
    <ul className={`${styles.navList} navBar`}>
      <Fade ssrFadeout left big>
        <li className={styles.navItem} onClick={() => updateView(1)}>
          <span className={styles.number}>01.</span> About
        </li>
        <li className={styles.navItem} onClick={() => updateView(2)}>
          <span className={styles.number}>02.</span> Apps
        </li>
        <li className={styles.navItem} onClick={() => updateView(3)}>
          <span className={styles.number}>03.</span> Blog
        </li>
        <li className={styles.navItem} onClick={() => updateView(4)}>
          <span className={styles.number}>04.</span> Contact
        </li>
        <li className={styles.navItem} style={{display: mobileStatus? "none" : ""}}>
          <label className={styles.toggle}>
            <input
              className={styles.toggleInput}
              name="matrixToggle"
              type="checkbox"
              checked={matrix && !highContrastStatus}
              onChange={() => matrixToggle()}
              disabled={!!highContrastStatus}
            />
            <div className={styles.toggleFill}></div>
          </label>
        </li>
        <li className={styles.navItem}>
          <img
            src={highContrastStatus ? "./conW.png" : "./contC.png"}
            width={30}
            height={30}
            onClick={handleHighContrast}
            alt="High contrast icon"
          />
        </li>
        <li className={styles.navItem}>
          <a href={pdfLocation} target="_blank" download={false}>
            <button className={styles.button}>Resume</button>
          </a>
        </li>
      </Fade>
    </ul>
  );
  const mobile = (
    <div className={styles.flexMobileRight}>
      <ul className={styles.navListMobile}>
        <Fade ssrFadeout left big>
          <li className={styles.navItem}>
            <img
              src={"./contC.png"}
              width={30}
              height={30}
              onClick={handleHighContrast}
              alt="Click icon to change contrast"
            />
          </li>
          <li className={styles.hamburgerItem} onClick={handleSideBar}>
            <img
              src="./menu.png"
              alt="Menu icon, open to expand"
              width="28"
              height="28"
            />
          </li>
        </Fade>
        <aside
          className={sideBar ? styles.activeSide : styles.side}
          style={
            highContrastStatus
              ? { backgroundColor: "#be0d0c" }
              : { backgroundColor: "grey" }
          }
          onClick={handleSideBar}
        >
          <ul className={styles.drawer}>
            <span onClick={() => handleSideAndScroll(1)}>
              <li className={styles.navItemSide}>1. </li> About
            </span>
            <span onClick={() => handleSideAndScroll(2)}>
              <li className={styles.navItemSide}>2. </li> Apps
            </span>
            <span onClick={() => handleSideAndScroll(3)}>
              <li className={styles.navItemSide}>3. </li> Blog
            </span>
            <span onClick={() => handleSideAndScroll(4)}>
              <li className={styles.navItemSide}>4. </li> Contact
            </span>
            <span id={styles.specialSpan}>
              <li className={styles.navItemSide}>
                <a href={pdfLocation} target="_blank">
                  <button className={styles.buttonDrawer}>
                    <img
                      src="./wdownload.png"
                      width="24"
                      height="24"
                      alt="download resume"
                    />{" "}
                    Resume
                  </button>
                </a>
              </li>
            </span>
            <span id={styles.specialSpan}>
              <li className={styles.navItemSide}>
                <a href="https://www.emmanuelarturo.com/" target="_blank">
                  <button className={styles.buttonDrawer}>
                    <img
                      src="./wlink.png"
                      width="22"
                      height="22"
                      alt="link to blog"
                    />{" "}
                    Blog
                  </button>
                </a>
              </li>
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
      className={`${styles.navigation} navBar`}
      style={
        highContrastStatus
          ? { backgroundColor: "#808080fa", transition: "700ms" }
          : { backgroundColor: "#003b59d4", transition: "700ms" }
      }
    >
      <div className={styles.imageDiv}>
        <Bounce ssrFadeout left>
          <img
            className={styles.image}
            src="./emmanuelCircle.png"
            alt="Picture of Emmanuel G"
            onClick={() => updateView(0)}
            width="40"
            height="40"
          />
        </Bounce>
      </div>
      {width > breakpoint ? desktop : mobile}
    </nav>
  );
}

export default Navigation;
