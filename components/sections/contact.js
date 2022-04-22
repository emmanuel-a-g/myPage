import styles from "./contact.module.css";
import { useRef } from "react";
import { useMyContext } from "../context/myContext";

function Contact() {
  const nameRef = useRef();
  const emailRef =  useRef();
  const textRef = useRef();
  const {sayHiTo} = useMyContext();

  function handleSubmit(e) {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let text = textRef.current.value;
    console.log(name, email, text);
    sayHiTo(name);
  }

  return (
    <div className={styles.contactBox}>
      <h3 className={styles.title}>
        <span className={styles.number}>04.</span> Contact
      </h3>
      <div className={styles.contactMe}>
        <h3 className={styles.hearIt}>I am open to new opportunites...</h3>
        <h4 className={styles.letsChat}>Let's chat?</h4>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input ref={nameRef} className={styles.input} type="text" placeholder="Name"/>
          <br/>
          <input ref={emailRef} className={styles.input} type="email" placeholder="Email"/>
          <br/>
          <textarea ref={textRef} className={styles.textArea} rows="4" placeholder="Message"/>
          <br/>
          <button className={styles.button}>Send!</button>
        </form>
        <br/>
        <h4 className={styles.or}>or best</h4>
        <h4 className={styles.letsChat}>Contact me through LinkedIn below.</h4>
        <a className={styles.linkedIn} href="https://linkedin.com/in/emmanuel-a-g" target="_blank">
        <img src="./linked.png" alt="linkedIn icon, click to open my linkedIn!"/>
        </a>
      </div>
    </div>
  );
}
export default Contact;
