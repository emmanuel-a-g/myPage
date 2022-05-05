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
              width="380"
              height="210"
              alt="an image of a blog post"
            />
          </a>
          <div className={styles.caption}>
            Click on any blog post image, to visit my Blog! There you can find
            a more detailed description of the apps or you can visit my
            github.
          </div>
        </div>
        <div className={styles.blogPost} style={highContrastStatus ? { borderColor: "black" } : { borderColor: "#00ffd5" }}>
          <a
            href="https://nextjs-blog-emmanuel-a-g.vercel.app/posts/getting-started-with-nextjs"
            target="_blank"
          >
            <img
              src="./images/lighthouse.png"
              width="380"
              height="210"
              alt="image of lighthouse peformance scores"
            />
          </a>
          <div className={styles.caption}>
            Next.js is incredibly fast, this is a snapshot of how we can utilize
            server-side rendering for great performance & delivery of apps!
          </div>
        </div>
        <div className={styles.blogPost} style={highContrastStatus ? { borderColor: "black" } : { borderColor: "#00ffd5" }}>
          <a
            href="https://nextjs-blog-emmanuel-a-g.vercel.app/posts/exponent"
            target="_blank"
          >
            <img
              src="./images/exponentMin.png"
              width="380"
              height="210"
              alt="exponent website screenshot"
            />
          </a>
          <div className={styles.caption}>
            Exponent has many cool features, but the coolest one is its usage of an API on the server side that hits multiple CRUD
            endpoints.
          </div>
        </div>
        <div className={styles.blogPost} style={highContrastStatus ? { borderColor: "black" } : { borderColor: "#00ffd5" }}>
        <a href="https://nextjs-blog-emmanuel-a-g.vercel.app/posts/amazon" target="_blank">
          <img
            src="./images/amazonMin.png"
            width="380"
            height="210"
            alt="amazonClone website screenshot"
          />
          </a>
          <div className={styles.caption}>
            In our Amazon Clone, you can sign-in, sign-up, delete account,
            search items, and even add to cart. Auth, was implemented with...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
