//make it re-usable for apps that you build.
import { useState, useEffect } from "react";
import styles from "./apps.module.css";
function Apps({name, data}) {
  const [width, setWidth] = useState(null);
  const breakpoint = 700;
  const { title, description, tech, github, theLink} = data;

  useEffect(() => {
    if (width === null) {
      setWidth(window.innerWidth);
    }
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  let theClass;
  let theContentBox;
  if (name === "two") {
    theClass = "two";
    theContentBox = styles.smallContentBoxTwo;
  } else {
    theClass = "one";
    theContentBox = styles.smallContentBox;
  }
  // <img src="./images/amazon.png" alt="Amazon clone app screenshot" />
  return (
    <div>
      <div className={width < breakpoint ? styles.smallAppRec : styles.appRec}>
        {width < breakpoint ? null : (
          <div
            className={
              theClass === "one" ? styles.imageBox : styles.imageBoxTwo
            }
          ></div>
        )}
        <div className={width < breakpoint ? theContentBox : styles.contentBox}>
          <h5 className={styles.featured}>Featured Project</h5>
          <a
            className={styles.titleLink}
            href="https://linkedin.com/in/emmanuel-a-g"
          >
            <h3 className={styles.title}>{title}</h3>
          </a>
          <p className={styles.description}>{description}</p>
          {width < breakpoint ? null : (
            <span className={styles.tech}>{tech}</span>
          )}
          <div className={styles.links}>
            <a
              className={styles.anchor}
              href={github}
              target="_blank"
            >
              <img src="./github.png" alt="github link to project" />
            </a>
            <a
              className={styles.anchor}
              href={theLink}
              target="_blank"
            >
              <img
                src="./link.png"
                alt="link to checkout project in new tab window"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apps;
