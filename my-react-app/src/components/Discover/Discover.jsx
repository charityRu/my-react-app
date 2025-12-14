import styles from "./Discover.module.css";

function Discover() {
  return (
    <section className={styles.discover}>
      <h2>Discover Your Career Path</h2>
      <p className={styles.subtext}>
        Choose the right path and gain skills that fit your future goals.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h3>Start Learning</h3>
            <p>
              Explore courses designed to help you build real-world skills.
            </p>
            <button>Explore Courses →</button>
          </div>
          <div className={styles.image}>Image</div>
        </div>

        <div className={styles.card}>
          <div className={styles.text}>
            <h3>Build Your Gain</h3>
            <p>
              Gain knowledge that prepares you for today’s job market.
            </p>
            <button>Get Started →</button>
          </div>
          <div className={styles.image}>Image</div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
