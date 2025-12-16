import styles from "./About.module.css";
import aboutImage from "../../assets/About.svg"; 


function About() {
  return (
    <section className={styles.about}>
      <div className={styles.image}>
        <img src={aboutImage} alt="About Illustration" />
        <div className={styles.imageLabel}>
          
        </div>
      </div>

      < div className={styles.content}>
        <h2>Learn and Grow your skills from anywhere </h2>
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
