import styles from "./Instructors.module.css";

import inst1 from "../../assets/instructor1.svg";
import inst2 from "../../assets/instructor2.svg";
import inst3 from "../../assets/instructor3.svg";
import inst4 from "../../assets/instructor4.svg";

function Instructors() {
  return (
    <section className={styles.instructors}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>OUR INSTRUCTOR</span>
          <h2>Meet Our Expert <br /> Instructor</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className={styles.actions}>
            <button className={styles.primary}>Contact Us</button>
            <button className={styles.secondary}>Find Courses</button>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className={styles.grid}>
          <InstructorCard img={inst1} name="Esther Howard" />
          <InstructorCard img={inst2} name="Beverly Hathcock" />
          <InstructorCard img={inst3} name="Donald Gonzales" />
          <InstructorCard img={inst4} name="Eddie Lenz" />
        </div>

      </div>
    </section>
  );
}

function InstructorCard({ img, name }) {
  return (
    <div className={styles.card}>
      <img src={img} alt={name} />
      <div className={styles.info}>
        <h4>{name}</h4>
        <span>Junior Instructor</span>
      </div>
    </div>
  );
}

export default Instructors;
