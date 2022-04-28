import { useMyContext } from "../context/myContext";
import { useEffect } from "react";
import Aside from "./aside";
import AsideRight from "./asideRight";
import styles from "./hero.module.css";
import Main from "./main";

function Hero() {
  const { highContrastStatus, width, updateWidth } = useMyContext();
  const breakpoint = 700;
  useEffect(() => {
    if (width === null) {
      updateWidth(window.innerWidth);
    }
    const handleWindowResize = () => updateWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div
      className={width < breakpoint ? styles.heroFull : styles.hero}
      style={
        highContrastStatus
          ? { backgroundColor: "#5f5e5e" }
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
