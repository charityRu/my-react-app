import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>Creating a Community of Life Long Learners</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <span className={styles.quote}>"</span>
          <p>
            This platform helped me gain confidence and real skills for my career.
          </p>
          <h4>Student Name</h4>
        </div>

        <div className={styles.card}>
          <span className={styles.quote}>"</span>
          <p>
            The courses are easy to follow and very practical.
          </p>
          <h4>Student Name</h4>
        </div>

        <div className={styles.card}>
          <span className={styles.quote}>"</span>
          <p>
            I learned at my own pace and improved my skills fast.
          </p>
          <h4>Student Name</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
