import styles from "./main.module.css";
import AboutMe from "../sections/aboutMe";
import Intro from "../sections/intro";
import Work from "../sections/work";
import { useEffect, useRef, useState } from "react";
import { useMyContext } from "../context/myContext";
function Main() {
  const { current } = useMyContext();
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const introScroll = () => introRef.current.scrollIntoView();
  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const workScroll = () => workRef.current.scrollIntoView();

  useEffect(() => {
    if (current === 1) {
      aboutScroll();
    } else if (current === 2) {
      workScroll();
    } else {
      // workScroll();
    }
  }, [current]);

  return (
    <div className={styles.middleScroll}>
      <div className={styles.gap}>
        <div ref={introRef}>
          <Intro />
        </div>
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={workRef}>
          <Work />
        </div>
      </div>
    </div>
  );
}

export default Main;
