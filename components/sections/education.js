import styles from "./education.module.css";

function Education() {
  return (
    <div className={styles.edu}>
      <h3 className={styles.title}>
        <span className={styles.number}>03.</span> Education
      </h3>
      <div className={styles.iframeBox}>
        <iframe className={styles.theIframe} src="https://docs.google.com/document/d/e/2PACX-1vQ0gHRDABIHb4v7LB_LRJII3mfFYVUgIwTHyBGrzk7uOKYo1Pw_OsZKlkTIxKDadAOd6VpPLgU1eDLN/pub?embedded=true"></iframe>
      </div>
    </div>
  );
}

export default Education;
