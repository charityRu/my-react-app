import styles from "./Categories.module.css";
import {
  FaBriefcase,
  FaPaintBrush,
  FaUserGraduate,
  FaLaptopCode,
  FaPenNib,
  FaBullhorn,
  FaCrown,
  FaBoxOpen,
  FaVideo,
} from "react-icons/fa";

function Categories() {
  return (
    <section className={styles.categories}>
      <h2>Browse By Categories</h2>

      <div className={styles.list}>
        <div className={styles.card}>
          <FaBriefcase className={styles.icon} />
          <span>Business Management</span>
        </div>

        <div className={styles.card}>
          <FaPaintBrush className={styles.icon} />
          <span>Arts & Design</span>
        </div>

        <div className={styles.card}>
          <FaUserGraduate className={styles.icon} />
          <span>Personal Development</span>
        </div>

        <div className={styles.card}>
          <FaLaptopCode className={styles.icon} />
          <span>UI/UX Design</span>
        </div>

        <div className={styles.card}>
          <FaPenNib className={styles.icon} />
          <span>Graphic Design</span>
        </div>

        <div className={styles.card}>
          <FaBullhorn className={styles.icon} />
          <span>Digital Marketing</span>
        </div>

        <div className={styles.card}>
          <FaCrown className={styles.icon} />
          <span>Exclusive Man</span>
        </div>

        <div className={styles.card}>
          <FaBoxOpen className={styles.icon} />
          <span>Product Design</span>
        </div>

        <div className={styles.card}>
          <FaVideo className={styles.icon} />
          <span>Video & Photography</span>
        </div>
      </div>
    </section>
  );
}

export default Categories;
