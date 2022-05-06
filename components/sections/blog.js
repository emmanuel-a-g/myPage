import styles from "./blog.module.css";
import { useMyContext } from "../context/myContext";

function Blog() {
  const { highContrastStatus } = useMyContext();

  return (
    <div className={styles.theBlog}>
      <h3
        className={styles.title}
        style={highContrastStatus ? { color: "#be0d0c" } : { color: "#00ffd5" }}
      >
        <span className={styles.number}>03.</span> Blog
      </h3>
      <div className={styles.theGrid}>
        <div className={styles.blogPost}  style={highContrastStatus ? { borderColor: "black" } : { borderColor: "#00ffd5" }}>
          <a
            href="https://nextjs-blog-emmanuel-a-g.vercel.app/"
            target="_blank"
          >
            <img
              src="./images/githubProfile.png"
              width="360"
              height="210"
              alt="an image of a blog post"
            />
          </a>
          <div className={styles.caption}>
            <h4 className={styles.postTitle}>My Blog</h4>
            Visit my blog by clicking any of the blog images! There you can find
            a more detailed description of the apps or just visit it!
          </div>
        </div>
        <div className={styles.blogPost} style={highContrastStatus ? { borderColor: "black" } : { borderColor: "#00ffd5" }}>
          <a
            href="https://nextjs-blog-emmanuel-a-g.vercel.app/posts/getting-started-with-nextjs"
            target="_blank"
          >
            <img
              src="./images/lighthouse.png"
              width="360"
              height="210"
              alt="image of lighthouse peformance scores"
            />
          </a>
          <div className={styles.caption}>
            <h4 className={styles.postTitle}>Next.js</h4>
            Next.js is incredibly fast, this is a snapshot of how we can utilize
            server-side rendering for amazing performance & delivery of apps!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
