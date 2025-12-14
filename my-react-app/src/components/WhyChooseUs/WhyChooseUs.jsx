import styles from "./WhyChooseUs.module.css";

function WhyChooseUs() {
  return (
    <section className={styles.why}>
      <div className={styles.wrapper}>
        
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2>Why Choose Us</h2>
          <p>
            We offer high-quality online education designed to help
            students build skills and grow their careers.
          </p>

          <div className={styles.features}>
            <div className={styles.card}>
              <h4>Expert Instructors</h4>
              <p>Learn from experienced professionals.</p>
            </div>

            <div className={styles.card}>
              <h4>Flexible Learning</h4>
              <p>Study at your own pace from anywhere.</p>
            </div>

            <div className={styles.card}>
              <h4>Certified Courses</h4>
              <p>Earn certificates after completion.</p>
            </div>

            <div className={styles.card}>
              <h4>Affordable Prices</h4>
              <p>Quality education at reasonable cost.</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.imagePlaceholder}>
            Why Choose Us Image
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
