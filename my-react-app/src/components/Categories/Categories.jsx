import styles from "./Categories.module.css";
//categories component
function Categories() {
  return (
    <section className={styles.categories}>
      <h2>Browse Categories</h2>

      <div className={styles.list}>
        <div className={styles.card}>Design</div>
        <div className={styles.card}>Development</div>
        <div className={styles.card}>Business</div>
        <div className={styles.card}>Marketing</div>
      </div>
    </section>
  );
}

export default Categories;
