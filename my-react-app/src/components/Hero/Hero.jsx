import styles from "./Hero.module.css"; // hero styles

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <span className={styles.welcome}>
          WELCOME EDUNITY ONLINE COURSES
        </span>

        <h1>Achieving Your Dreams Through Education</h1>

        <p>
          We are experienced in educational platforms and skilled strategies
          for the success of online learning.
        </p>

        <button>Find Courses</button>
      </div>

      <div className={styles.image}>
        <div className={styles.placeholder}>
          Hero Image
        </div>
      </div>
    </section>
  );
}

export default Hero;
