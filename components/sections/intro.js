import styles from "./intro.module.css";
import { useMyContext } from "../context/myContext";
import { useState, useEffect } from "react";

function Intro() {
  const { highContrastStatus, matrix, matrixToggle } = useMyContext();
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    //check for mobile
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setMobile(true);
    }
  }, []);

  return (
    <div className={styles.introMe}>
      {!highContrastStatus && !mobile && matrix && (
        <video autoPlay loop muted className={styles.video}>
          <source src="./matrixSpace.mp4" />
        </video>
      )}
      <div className={styles.content} onClick={() => matrixToggle()}>
        <h5
          className={styles.hi}
          style={highContrastStatus ? { color: "black" } : { color: "white" }}
        >
          Hi, my name is
        </h5>
        <h1
          className={styles.name}
          style={highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }}
        >
          Emmanuel Garcia
        </h1>
        <h1
          className={styles.nameTwo}
          style={
            highContrastStatus ? { color: "#be0d0c" } : { color: "#00ffd5" }
          }
        >
          I am a full stack web developer.
        </h1>
        <p
          className={styles.text}
          style={highContrastStatus ? { color: "black" } : { color: "white" }}
        >
          Welcome to my hub! I'm glad you're here. I am currently open for new
          opportunities, please feel free to contact me through LinkedIn.
        </p>
      </div>
    </div>
  );
}

export default Intro;
