import Apps from "../apps/apps";
import styles from "./work.module.css";
let amazonClone = {
  title: "Amazon Clone",
  description: "Amazon is one of the top companies for online shopping and this clone mirrors a similar user experience, check it out !",
  tech: "React, React-Router, Firebase, Axios, PM2, Material-UI, React Bootstrap",
  github: "https://github.com/TheThreeDevs/amazon-clone",
  theLink: "http://www.twoamazon.com/"
};
let exponent = {
  title: "Expwnent",
  description: "Expwnent is a web application for tournament organizers and players to meet and engage in epic battle with the game of their choice. Click below to make your first tournament !",
  tech: "React, React-Router, Node, Express, AWS, API",
  github: " https://github.com/hratx-blue-ocean/pogchamp.",
  theLink: "http://www.expwnent.com/"
};
function Work() {
  return (
    <div className={styles.work}>
      <h3 className={styles.title}>
        <span className={styles.number}>02.</span> Apps
      </h3>
      <div className={styles.theGrid}>
          <Apps name="one" data={amazonClone}/>
          <Apps name="two" data={exponent}/>
      </div>
    </div>
  );
}

export default Work;
