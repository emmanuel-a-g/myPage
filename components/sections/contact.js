import styles from "./contact.module.css";
import { useState } from "react";
import { useMyContext } from "../context/myContext";
import Fade from "react-reveal/Fade";

function Contact() {
  const { sayHiTo, highContrastStatus } = useMyContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let determineName = name === "" ? "Visitor" : name;
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ email, name: determineName, message: text.trim()}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const date = data.date;
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      } else {
        sayHiTo(determineName, date);
      }
    } catch (err) {
      sayHiTo("error");
      console.log("Error posting message: ", err.message);
    }
    setTimeout(() => {
      setName("");
      setEmail("");
      setText("");
    }, 1000);
  }

  return (
    <div className={styles.contactBox}>
      <Fade ssrFadeout top big>
        <h3
          className={styles.title}
          style={
            highContrastStatus ? { color: "#be0d0c" } : { color: "#00ffd5" }
          }
        >
          <span className={styles.number}>04.</span> Contact
        </h3>
      </Fade>
      <div className={styles.contactMe}>
        <h3
          className={styles.hearIt}
          style={highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }}
        >
          I am open to new opportunites...
        </h3>
        <Fade ssrFadeout bottom big>
          <h4
            className={styles.letsChat}
            style={
              highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }
            }
          >
            Let's chat?
          </h4>
        </Fade>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.top}>
            <input
              className={styles.inputOne}
              type="text"
              placeholder="Name"
              value={name}
              style={
                highContrastStatus ? { color: "black" } : { color: "white" }
              }
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.inputTwo}
              required
              type="email"
              placeholder="Email"
              value={email}
              style={
                highContrastStatus ? { color: "black" } : { color: "white" }
              }
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <textarea
            className={styles.textArea}
            required
            rows="6"
            placeholder="Message"
            value={text}
            style={
              highContrastStatus ? { color: "black" } : { color: "white" }
            }
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button
            className={styles.button}
            style={
              highContrastStatus
                ? {
                    backgroundColor: "#5f5e5e",
                    color: "white",
                    borderColor: "white",
                  }
                : { backgroundColor: "inherit" }
            }
          >
            SEND
          </button>
        </form>
        <br />
        <h4
          className={styles.or}
          style={highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }}
        >
          or
        </h4>
        <h4
          className={styles.letsChat}
          style={highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }}
        >
          Contact me through{" "}
          <a
            href="https://linkedin.com/in/emmanuel-a-g"
            className={styles.linkedLink}
            style={
              highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }
            }
            target="_blank"
          >
            LinkedIn
          </a>
        </h4>
      </div>
    </div>
  );
}
export default Contact;
