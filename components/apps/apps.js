import { useState, useEffect } from "react";
import styles from "./apps.module.css";
import { useMyContext } from "../context/myContext";
//make it re-usable for apps that you build
function Apps({ name, data }) {
  const { highContrastStatus } = useMyContext();
  const [width, setWidth ] = useState(null);
  const { title, description, tech, github, theLink } = data;
  const breakpoint = 700;
  let theClass;
  let theContentBox;
  let imageBoxCurrent;
  if (name === "two") {
    theClass = "two";
    theContentBox = styles.smallContentBoxTwo;
    imageBoxCurrent = styles.imageBoxTwo;
  } else {
    theClass = "one";
    theContentBox = styles.smallContentBox;
    imageBoxCurrent = styles.imageBox;
  }
  if (highContrastStatus === true && name === "one") {
    imageBoxCurrent = styles.imageBoxContrast;
  } else if (highContrastStatus === true && name === "two") {
    imageBoxCurrent = styles.imageBoxContrastTwo;
  }
  useEffect(() => {
    if (width === null) {
      setWidth(window.innerWidth);
    }
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // <img src="./images/amazon.png" alt="Amazon clone app screenshot" />
  return (
      <div className={width < breakpoint ? styles.smallAppRec : styles.appRec}>
        {width < breakpoint ? null : (
          <a
            className={styles.anchorWrapper}
            href={theLink}
            target="_blank"
            title="Anchor to open up my app in new tab"
          >
            <div
              className={imageBoxCurrent}
              style={highContrastStatus ? { filter: "none" } : null}
            ></div>
          </a>
        )}
        <div className={width < breakpoint ? theContentBox : styles.contentBox}>
          <h5
            className={styles.featured}
            style={highContrastStatus ? { color: "black" } : { color: "white" }}
          >
            Featured Project
          </h5>
          <a
            className={styles.titleLink}
            href={theLink}
            alt={`link to the ${title} website`}
            target="_blank"
          >
            <h3
              className={styles.title}
              style={
                highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }
              }
            >
              {title}
            </h3>
          </a>
          <p className={styles.description}>{description}</p>
          {width < breakpoint ? null : (
            <span
              className={styles.tech}
              style={
                highContrastStatus ? { color: "black" } : { color: "white" }
              }
            >
              {tech}
            </span>
          )}
          <div className={styles.links}>
            <a className={styles.anchor} href={github} target="_blank">
              <img
                src="./github.png"
                alt="github link to project"
                width="24"
                height="24"
              />
            </a>
            <a className={styles.anchor} href={theLink} target="_blank">
              <img
                src="./link.png"
                alt="link to checkout project in new tab window"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>
      </div>
  );
}

export default Apps;
