import styles from "./Courses.module.css";

// Courses section component
function Courses() {
  // Course data stored in an array for easy reuse
  const courses = [
    {
      id: 1,
      title: "Business Management",
      instructor: "John Smith",
      price: "Free",
      category: "Business",
    },
    {
      id: 2,
      title: "Graphic Design Basics",
      instructor: "Sarah Lee",
      price: "$25",
      category: "Design",
    },
    {
      id: 3,
      title: "Digital Marketing",
      instructor: "Michael Brown",
      price: "$30",
      category: "Marketing",
    },
    {
      id: 4,
      title: "UX/UI Design",
      instructor: "Emily Davis",
      price: "$40",
      category: "Design",
    },
    {
      id: 5,
      title: "Personal Development",
      instructor: "David Wilson",
      price: "Free",
      category: "Growth",
    },
    {
      id: 6,
      title: "Web Development",
      instructor: "Anna Johnson",
      price: "$50",
      category: "Development",
    },
  ];

  return (
    <section className={styles.courses}>
      {/* Header and button */}
  <div className={styles.header}>
    <h2>Edunity Course Student Can Join With Us</h2>

    <button className={styles.joinBtn}>
      Join With Us
    </button>
  </div>
      

      {/* Grid container for course cards */}
      <div className={styles.grid}>
        {courses.map((course) => (
          <div className={styles.card} key={course.id}>
            {/* Image placeholder – real images can be added later */}
            <div className={styles.imagePlaceholder}>
              {course.category}
            </div>

            <h3>{course.title}</h3>
            <p className={styles.instructor}>
              Instructor: {course.instructor}
            </p>

            <div className={styles.footer}>
              <span className={styles.price}>{course.price}</span>
              <button className={styles.enrollBtn}>Enroll →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
