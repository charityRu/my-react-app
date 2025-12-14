import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>

        {/* COLUMN 1 */}
        <div className={styles.brand}>
          <h4>CourseHub</h4>
          <p>
            Empowering learners through quality online education.
          </p>

          <div className={styles.socials}>
            <span>FB</span>
            <span>TW</span>
            <span>IG</span>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4>Our Services</h4>
          <ul>
            <li>Online Courses</li>
            <li>Certification</li>
            <li>Career Guidance</li>
            <li>Skill Training</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4>Gallery</h4>
          <div className={styles.gallery}>
            <div className={styles.img}>Img</div>
            <div className={styles.img}>Img</div>
            <div className={styles.img}>Img</div>
            <div className={styles.img}>Img</div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
