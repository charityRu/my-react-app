import styles from "./Navbar.module.css";

function Navbar(){
    return (
<nav className={styles.navbar}>
    <div className={styles.logo}>CourseHub</div>

    <ul className={styles.menu}>
        <li>Home</li>
        <li>Courses</li>
        <li>About</li>
        <li>Contact</li>
    </ul>

    <button className={styles.button}>Sign In</button>
</nav>
    );
}

export default Navbar;