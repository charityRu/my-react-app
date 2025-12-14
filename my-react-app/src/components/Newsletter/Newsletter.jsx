import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h3>Join Our Newsletter</h3>
          <p>Get updates on new courses and special offers.</p>
        </div>

        <form className={styles.form}>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
