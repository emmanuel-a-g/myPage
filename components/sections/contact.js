import styles from "./contact.module.css";
import { useState } from "react";
import { useMyContext } from "../context/myContext";

function Contact() {
  const { sayHiTo, highContrastStatus } = useMyContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ email, name, message: text }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const date = data.date;
      console.log(date);
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      } else {
        sayHiTo(name, date);
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
      <h3
        className={styles.title}
        style={highContrastStatus ? { color: "#be0d0c" } : { color: "#00ffd5" }}
      >
        <span className={styles.number}>03.</span> Contact
      </h3>
      <div className={styles.contactMe}>
        <h3
          className={styles.hearIt}
          style={highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }}
        >
          I am open to new opportunites...
        </h3>
        <h4
          className={styles.letsChat}
          style={highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }}
        >
          Let's chat?
        </h4>
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
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <textarea
            className={styles.textArea}
            required
            rows="4"
            placeholder="Message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button
            className={styles.button}
            style={highContrastStatus ? { backgroundColor: "#5f5e5e" } : null}
          >
            Send!
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
            style={highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }}
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
