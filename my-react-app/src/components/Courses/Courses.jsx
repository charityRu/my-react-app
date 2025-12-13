import styles from "./Courses.module.css";

function Courses() {
  return (
    <section className={styles.courses}>
      <h2>Popular Courses</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Web Development</h3>
          <p>Learn how to build modern websites and applications.</p>
        </div>

        <div className={styles.card}>
          <h3>UI/UX Design</h3>
          <p>Design beautiful and user-friendly interfaces.</p>
        </div>

        <div className={styles.card}>
          <h3>Digital Marketing</h3>
          <p>Grow brands and reach audiences online.</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
    //courses component