import { useEffect, useRef, useState } from "react";
import { useMyContext } from "../context/myContext";
import styles from "./main.module.css";
import AboutMe from "../sections/aboutMe";
import Intro from "../sections/intro";
import Work from "../sections/work";
import Contact from "../sections/contact";
import Education from "../sections/education";
function Main() {
  const { current, highContrastStatus } = useMyContext();
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const eduRef = useRef(null);
  const introScroll = () => introRef.current.scrollIntoView();
  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const workScroll = () => workRef.current.scrollIntoView();
  const eduScroll = () => eduRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();

  useEffect(() => {
    if (current === 1) {
      aboutScroll();
    } else if (current === 2) {
      workScroll();
    } else if (current === 4) {
      contactScroll();
    } else if (current === 0) {
      introScroll();
    } else {
      eduScroll();
    }
  }, [current]); 
  // <div className={styles.ref} ref={eduRef}>
  // <Education />
  // </div>

  return (
    <div className={highContrastStatus ? styles.middleScrollContrast : styles.middleScroll}>
      <div className={styles.gap}>
        <div className={styles.ref} ref={introRef}>
          <Intro />
        </div>
        <div className={styles.ref} ref={aboutRef}>
          <AboutMe />
        </div>
        <div className={styles.ref} ref={workRef}>
          <Work />
        </div>
        <div className={styles.ref} ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Main;
