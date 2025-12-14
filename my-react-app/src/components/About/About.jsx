import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.image}>
        <div className={styles.placeholder}>
          About Image
        </div>
      </div>

      <div className={styles.content}>
        <h2>Learn New Skills Online With Expert Instructors</h2>
        <p>
          Our platform offers a wide range of online courses designed to help
          students gain practical knowledge and advance their careers.
        </p>

        <ul>
          <li>Expert instructors</li>
          <li>Flexible learning schedule</li>
          <li>Affordable online courses</li>
        </ul>
        <button className={styles.button}>Learn More</button>


      </div>
    </section>
  );
}

export default About;
