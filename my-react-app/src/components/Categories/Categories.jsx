import styles from "./Categories.module.css";
//categories component
function Categories() {
  return (
    <section className={styles.categories}>
      <h2>Browse By Categories</h2>

      <div className={styles.list}>
        <div className={styles.card}>Graphic Design</div>
        <div className={styles.card}>Personal Development</div>
        <div className={styles.card}>Business Management</div>
        <div className={styles.card}>Digital Marketing</div>
        <div className={styles.card}>UX/UI Design</div>
        <div className={styles.card}>Exclusive Man</div>
        <div className={styles.card}>Video and Photography</div>
        <div className={styles.card}>Arts & Design</div>
        <div className={styles.card}>Product Design</div>
      </div>
    </section>
  );
}

export default Categories;
