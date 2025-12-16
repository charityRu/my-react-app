import styles from "./WhyChooseUs.module.css";
import whyImage from "../../assets/community.svg";

function WhyChooseUs() {
  return (
    <section className={styles.why}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.left}>
          <h2>Creating A Community of Lifelong Learners</h2>
          <p className={styles.description}>
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

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.imageFrame}></div>
          <img src={whyImage} alt="Why choose us" />
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
