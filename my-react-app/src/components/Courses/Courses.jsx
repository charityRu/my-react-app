import styles from "./Courses.module.css";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "Business Management",
      instructor: "John Smith",
      price: "Free",
    },
    {
      id: 2,
      title: "Graphic Design Basics",
      instructor: "Sarah Lee",
      price: "$25",
    },
    {
      id: 3,
      title: "Digital Marketing",
      instructor: "Michael Brown",
      price: "$30",
    },
    {
      id: 4,
      title: "UX/UI Design",
      instructor: "Emily Davis",
      price: "$40",
    },
    {
      id: 5,
      title: "Personal Development",
      instructor: "David Wilson",
      price: "Free",
    },
    {
      id: 6,
      title: "Web Development",
      instructor: "Anna Johnson",
      price: "$50",
    },
  ];

  return (
    <section className={styles.courses}>
      <h2>Our Popular Courses</h2>

      <div className={styles.grid}>
        {courses.map((course) => (
          <div className={styles.card} key={course.id}>
            <div className={styles.image}>Course Image</div>

            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <span className={styles.price}>{course.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
