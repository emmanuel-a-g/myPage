import styles from "./intro.module.css";
import { useMyContext } from '../context/myContext';

function Intro() {
  const { highContrastStatus } = useMyContext();
  console.log(highContrastStatus);
  return (
    <div className={styles.introMe}>
      <h5 className={styles.hi} style={highContrastStatus? {color: "black"} : {color: "white"}}>Hi, my name is</h5>
      <h1 className={styles.name} style={highContrastStatus? {color: "black"} : {color: "#00ffd5"}}>Emmanuel Garcia.</h1>
      <h1 className={styles.nameTwo}>I am fullstack web developer.</h1>
      <p className={styles.text} style={highContrastStatus? {color: "black"} : {color: "white"}}>
        Welcome to my hub! I'm glad you're here. I am currently open for new opportunities, please
        feel free to contact me through LinkedIn.
      </p>
    </div>
  );
}

export default Intro;
