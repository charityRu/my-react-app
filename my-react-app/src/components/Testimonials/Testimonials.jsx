import styles from "./Testimonials.module.css";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      
      <span className={styles.badge}>TESTIMONIAL</span>
      <h2>Creating A Community Of <br /> Life Long Learners.</h2>

      <div className={styles.cards}>
        
        <div className={styles.card}>
          <FaQuoteLeft className={styles.quote} />
          <p>
            Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <h4>Kathy Sullivan</h4>
          <span>CEO at Ordinat</span>
        </div>

        <div className={styles.card}>
          <FaQuoteLeft className={styles.quote} />
          <p>
            Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <h4>Elsie Stroud</h4>
          <span>CEO at Edwards</span>
        </div>

        <div className={styles.card}>
          <FaQuoteLeft className={styles.quote} />
          <p>
            Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <h4>Kathy Sullivan</h4>
          <span>CEO at Ordinat</span>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
