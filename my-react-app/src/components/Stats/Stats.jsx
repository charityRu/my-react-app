import styles from "./Stats.module.css";

function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h3>3K+</h3>
          <p>Successfully Trained</p>
        </div>

        <div className={styles.item}>
          <h3>15K+</h3>
          <p>Classes Completed</p>
        </div>

        <div className={styles.item}>
          <h3>97%</h3>
          <p>Satisfaction Rate</p>
        </div>

        <div className={styles.item}>
          <h3>102+</h3>
          <p>Expert Instructors</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
