import { useMyContext } from "../context/myContext";
import { useEffect, useState } from "react";
import Aside from "./aside";
import AsideRight from "./asideRight";
import styles from "./hero.module.css";
import Main from "./main";

function Hero() {
  const { highContrastStatus } = useMyContext();
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

  return (
    <div
      className={width < breakpoint ? styles.heroFull : styles.hero}
      style={
        highContrastStatus
          ? { backgroundColor: "white" }
          : { backgroundColor: "#003b59" }
      }
    >
      {width < breakpoint ? null : <Aside className={styles.left} />}
      <Main
        className={width < breakpoint ? styles.middleFull : styles.middle}
      />
      {width < breakpoint ? null : <AsideRight className={styles.right} />}
    </div>
  );
}

export default Hero;
