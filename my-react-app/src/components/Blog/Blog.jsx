import styles from "./Blog.module.css";

function Blog() {
  return (
    <section className={styles.blog}>
      <div className={styles.header}>
        <h2>Most Popular Blog</h2>
        <button className={styles.viewBtn}>View All</button>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.image}>Image</div>
          <h4>How to Start Your Career</h4>
          <p>
            Learn how to begin your professional journey with confidence.
          </p>
          <button>Read More</button>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>Image</div>
          <h4>Top Skills to Learn</h4>
          <p>
            Discover the most in-demand skills for today’s job market.
          </p>
          <button>Read More</button>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>Image</div>
          <h4>Learning Made Easy</h4>
          <p>
            Tips and tricks to help you learn faster and better.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
