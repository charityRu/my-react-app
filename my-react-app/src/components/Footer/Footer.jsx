import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// Footer section
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>

        {/* COLUMN 1 */}
        <div className={styles.col}>
          <h3>Edunity</h3>
          <p>
            Building skills for the future through accessible
            and quality online education.
          </p>

          <div className={styles.socials}>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className={styles.col}>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className={styles.col}>
          <h4>Courses</h4>
          <ul>
            <li>Design</li>
            <li>Development</li>
            <li>Marketing</li>
            <li>Business</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className={styles.col}>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p>© 2025 Edunity. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
