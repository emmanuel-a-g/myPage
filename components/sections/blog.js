import styles from "./blog.module.css";
import { useMyContext } from "../context/myContext";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Blog() {
  const { highContrastStatus } = useMyContext();

  return (
    <div className={styles.theBlog}>
      <Fade ssrFadeout top big>
        <h3
          className={styles.title}
          style={
            highContrastStatus ? { color: "#be0d0c" } : { color: "#00ffd5" }
          }
        >
          <span className={styles.number}>03.</span> Blog
        </h3>
      </Fade>
      <div className={styles.theGrid}>
        <Zoom ssrFadeout left>
          <div
            className={styles.blogPostOne}
            style={
              highContrastStatus
                ? { borderColor: "black" }
                : { borderColor: "#7DFDFE" }
            }
          >
            <a href="https://www.emmanuelarturo.com/" target="_blank">
              <img
                src="./images/githubNew.png"
                width="320"
                height="208"
                alt="an image of a blog post"
              />
            </a>
            <div
              className={styles.caption}
              style={
                highContrastStatus ? { color: "black" } : { color: "white" }
              }
            >
              <h4
                className={styles.postTitle}
                style={
                  highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }
                }
              >
                The Blog
              </h4>
              Visit my blog by clicking any of the blog images! There you can
              find a more detailed description of my applications.
            </div>
          </div>
        </Zoom>
        <Zoom ssrFadeout right>
          <div
            className={styles.blogPostTwo}
            style={
              highContrastStatus
                ? { borderColor: "black" }
                : { borderColor: "#7DFDFE" }
            }
          >
            <a
              href="https://www.emmanuelarturo.com/posts/getting-started-with-nextjs"
              target="_blank"
            >
              <img
                src="./images/lighthouseMin.png"
                width="360"
                height="206"
                alt="image of lighthouse peformance scores"
              />
            </a>
            <div
              className={styles.caption}
              style={
                highContrastStatus ? { color: "black" } : { color: "white" }
              }
            >
              <h4
                className={styles.postTitle}
                style={
                  highContrastStatus ? { color: "black" } : { color: "#7DFDFE" }
                }
              >
                Next.js
              </h4>
              Next.js is incredibly fast, this snapshot shows how we can utilize
              server-side rendering for amazing performance & time delivery of
              apps.
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Blog;
