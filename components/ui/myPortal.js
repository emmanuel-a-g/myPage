import ReactDOM from 'react-dom';
import classes from './myPortal.module.css';

function MyPortal(props) {
  // const { title, message, status } = props;

  return ReactDOM.createPortal((
    <div className={classes.myPortal}>
      <h2>HELLO THIS IS MY PORTAL</h2>
      <p>I will appear soon!</p>
      <a href="http://www.twoamazon.com/" target="_blank">Visit amazon!</a>
    </div>
  ), document.getElementById("myPortal"));
}

export default MyPortal;
