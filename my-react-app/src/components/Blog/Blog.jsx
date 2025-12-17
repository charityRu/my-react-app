import styles from "./Blog.module.css";
import blog1 from "../../assets/blog1.svg";
import blog2 from "../../assets/blog2.svg";
import blog3 from "../../assets/blog3.svg";

// Blog section showing latest articles
function Blog() {
  return (
    <section className={styles.blog}>
      <span className={styles.badge}>BLOG & NEWS</span>
      <h2>Latest Articles</h2>

      <div className={styles.grid}>
        {/* BLOG CARD 1 */}
        <div className={styles.card}>
          <img src={blog1} alt="Blog article" />
          <div className={styles.content}>
            <span className={styles.date}>20 June 2024</span>
            <h4>How Online Learning Is Changing Education</h4>
            <p>
              Discover how digital platforms are transforming the way
              students learn and grow.
            </p>
            <button>Read More</button>
          </div>
        </div>

        {/* BLOG CARD 2 */}
        <div className={styles.card}>
          <img src={blog2} alt="Blog article" />
          <div className={styles.content}>
            <span className={styles.date}>18 June 2024</span>
            <h4>Top Skills Every Student Should Learn</h4>
            <p>
              Learn about the most important skills required in today’s
              competitive job market.
            </p>
            <button>Read More</button>
          </div>
        </div>

        {/* BLOG CARD 3 */}
        <div className={styles.card}>
          <img src={blog3} alt="Blog article" />
          <div className={styles.content}>
            <span className={styles.date}>15 June 2024</span>
            <h4>Why Certifications Matter</h4>
            <p>
              Certifications help validate your knowledge and boost
              your professional profile.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
