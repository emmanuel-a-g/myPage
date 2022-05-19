import ReactDOM from "react-dom";
import classes from "./myPortal.module.css";
import { useMyContext } from "../context/myContext";

function MyPortal() {
  const { highContrastStatus, name, date } = useMyContext();
  let message =
    name === "error"
      ? "Sorry message could not be send!"
      : `Hi ${name}! - Emmanuel`;

  return ReactDOM.createPortal(
    <div
      className={classes.myPortal}
      style={
        highContrastStatus
          ? { backgroundColor: "#5f5e5e" }
          : { backgroundColor: "#00ffd5" }
      }
    >
      <h3
        className={classes.text}
        style={highContrastStatus ? { color: "#00ffff" } : { color: "black" }}
      >
        {message}
      </h3>
      <h3
        style={highContrastStatus ? { color: "#00ffff" } : { color: "black" }}
      >
        {name === "error" ? "Please contact me through LinkedIn for now." : `Received message on ${date}!`}
      </h3>
    </div>,
    document.getElementById("myPortal")
  );
}

export default MyPortal;
