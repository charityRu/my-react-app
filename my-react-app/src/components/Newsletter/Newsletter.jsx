import styles from "./Newsletter.module.css";

// Newsletter subscription section
function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.wrapper}>
        {/* LEFT TEXT */}
        <div className={styles.text}>
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Stay updated with the latest courses, news, and learning
            opportunities.
          </p>
        </div>

        {/* RIGHT FORM */}
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
