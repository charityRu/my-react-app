import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  return (
    <header className={styles.header}>
      
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span><FaPhoneAlt /> (00) 875 784 5682</span>
          <span><FaEnvelope /> pacaroinfo@gmail.com</span>
          <span><FaMapMarkerAlt /> 238, Arimantab, Moska - USA</span>
        </div>

        <div className={styles.topRight}>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>

      {/* Main Nav */}
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="Edunity logo" />
        </div>

        <ul className={styles.links}>
          <li className={styles.active}>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <button className={styles.cta}>Create Account →</button>
      </div>
    </header>
  );
}

export default Navbar;

