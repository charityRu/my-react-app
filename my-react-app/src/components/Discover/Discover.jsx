import styles from "./Discover.module.css";
import leftImg from "../../assets/left.svg";
import rightImg from "../../assets/right.svg";

// This section highlights what students gain from joining
function Discover() {
  return (
    <section className={styles.discover}>
      <span className={styles.badge}>CHOOSE YOUR CAREER</span>
      <h2>Discover Your Gain</h2>

      <div className={styles.cards}>
        {/* LEFT CARD */}
        <div className={styles.cardPurple}>
          <div className={styles.text}>
            <h4>Start From Today</h4>
            <p>
              Join our training courses and build your skill with
              practical learning experiences.
            </p>
            <button>Join Now</button>
          </div>
          <img src={leftImg} alt="Student learning" />
        </div>

        {/* RIGHT CARD */}
        <div className={styles.cardYellow}>
          <div className={styles.text}>
            <h4>Start From Today</h4>
            <p>
              Improve your career opportunities by learning from
              experienced instructors.
            </p>
            <button>Join Now</button>
          </div>
          <img src={rightImg} alt="Student smiling" />
        </div>
      </div>
    </section>
  );
}

export default Discover;
