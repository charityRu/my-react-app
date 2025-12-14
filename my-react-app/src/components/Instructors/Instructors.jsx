import styles from "./Instructors.module.css";

function Instructors() {
  return (
    <section className={styles.instructors}>
      <div className={styles.wrapper}>

        {/* LEFT TEXT */}
        <div className={styles.text}>
          <h2>Meet Our Expert Instructors</h2>
          <p>
            Learn from experienced instructors who are passionate
            about teaching and helping students grow.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className={styles.images}>
          <div className={styles.imageBox}>Instructor</div>
          <div className={styles.imageBox}>Instructor</div>
          <div className={styles.imageBox}>Instructor</div>
          <div className={styles.imageBox}>Instructor</div>
        </div>

      </div>
    </section>
  );
}

export default Instructors;
