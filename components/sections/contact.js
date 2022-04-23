import styles from "./contact.module.css";
import { useState } from "react";
import { useMyContext } from "../context/myContext";

function Contact() {
  const { sayHiTo, highContrastStatus } = useMyContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, text);
    sayHiTo(name)
    setTimeout(() => {
      setName("");
      setEmail("");
      setText("");
    }, 1000);
  }

  return (
    <div className={styles.contactBox}>
      <h3 className={styles.title}>
        <span className={styles.number}>03.</span> Contact
      </h3>
      <div className={styles.contactMe}>
        <h3 className={styles.hearIt} style={highContrastStatus? {color: "black"} : {color: "#7DFDFE"}}>I am open to new opportunites...</h3>
        <h4 className={styles.letsChat} style={highContrastStatus? {color: "black"} : {color: "#7DFDFE"}}>Let's chat?</h4>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <textarea
            className={styles.textArea}
            rows="4"
            placeholder="Message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button className={styles.button}>Send!</button>
        </form>
        <br />
        <h4 className={styles.or} style={highContrastStatus? {color: "black"} : {color: "#7DFDFE"}}>or best</h4>
        <h4 className={styles.letsChat} style={highContrastStatus? {color: "black"} : {color: "#7DFDFE"}}>Contact me through LinkedIn below.</h4>
        <a
          className={styles.linkedIn}
          href="https://linkedin.com/in/emmanuel-a-g"
          target="_blank"
        >
          <img
            src="./linked.png"
            alt="linkedIn icon, click to open my linkedIn!"
          />
        </a>
      </div>
    </div>
  );
}
export default Contact;
