import ReactDOM from "react-dom";
import classes from "./myPortal.module.css";
import { useMyContext } from "../context/myContext";

function MyPortal(props) {
  const { name } = props;
  const { highContrastStatus } = useMyContext();

  return ReactDOM.createPortal(
    <div className={classes.myPortal} style={highContrastStatus? {backgroundColor: "black"} : {backgroundColor: "#00ffff"}}>
      <h3 className={classes.text} style={highContrastStatus? {color: "#00ffff"} :{color: "black"}}>{`Hi ${name}, from Emmanuel!`}</h3>
      <h3 style={highContrastStatus? {color: "#00ffff"} :{color: "black"}}>I'll check your message! bye, for now</h3>
    </div>,
    document.getElementById("myPortal")
  );
}

export default MyPortal;
