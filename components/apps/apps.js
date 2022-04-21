//make it re-usable for apps that you build.
import { useState, useEffect } from "react";
import styles from "./apps.module.css";
function Apps(props) {
  const [width, setWidth] = useState(null);
  const breakpoint = 700;

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
  if (props.name === "two") {
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
            <h3 className={styles.title}>The Coolest Project ever</h3>
          </a>
          <p className={styles.description}>
            some super cool descript will go here eventually for now this is jus
            text that will be used to fill up the place or so make up text
          </p>
          {width < breakpoint ? null : (
            <span className={styles.tech}>React, Nodejs, AWS, MongoDb</span>
          )}
          <div className={styles.links}>
            <a
              className={styles.anchor}
              href="https://linkedin.com/in/emmanuel-a-g"
              target="_blank"
            >
              <img src="./github.png" alt="github link to project" />
            </a>
            <a
              className={styles.anchor}
              href="https://linkedin.com/in/emmanuel-a-g"
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
