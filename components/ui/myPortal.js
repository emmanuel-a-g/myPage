import ReactDOM from "react-dom";
import classes from "./myPortal.module.css";

function MyPortal(props) {
  const { name } = props;

  return ReactDOM.createPortal(
    <div className={classes.myPortal}>
      <h3 className={classes.text}>{`Hi ${name}, from Emmanuel!`}</h3>
      <h3>I'll check your message! bye, for now</h3>
    </div>,
    document.getElementById("myPortal")
  );
}

export default MyPortal;
