import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.cta}>
      <h2>Start Learning Today</h2>
      <p>
        Join thousands of students learning new skills and building their future.
      </p>
      <button>Join Now</button>
    </section>
  );
}

export default CTA;
