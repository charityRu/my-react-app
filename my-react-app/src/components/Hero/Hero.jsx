import styles from "./Hero.module.css"; //hero styles
//hero component
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Achieving Your Dreams Through Education</h1>
        <p>
          Build skills for today, tomorrow, and the future.
            Explore a wide range of courses and start learning now.
        </p>
        <button>Get Started</button>
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
