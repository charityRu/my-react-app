import styles from "./Stats.module.css";
import {
  FaUserGraduate,
  FaBookOpen,
  FaSmile,
  FaUsers,
} from "react-icons/fa";

function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsWrapper}>
        
        <div className={styles.statCard}>
          <FaUserGraduate className={styles.icon} />
          <h3>3K+</h3>
          <p>Successfully Trained</p>
        </div>

        <div className={styles.statCard}>
          <FaBookOpen className={styles.icon} />
          <h3>15K+</h3>
          <p>Classes Completed</p>
        </div>

        <div className={styles.statCard}>
          <FaSmile className={styles.icon} />
          <h3>97K+</h3>
          <p>Satisfaction Rate</p>
        </div>

        <div className={styles.statCard}>
          <FaUsers className={styles.icon} />
          <h3>102K+</h3>
          <p>Students Community</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;
