import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonials";
import Instructors from "./components/Instructors/Instructors";
import Discover from "./components/Discover/Discover";
import Blog from "./components/Blog/Blog";
import Newsletter from "./components/Newsletter/Newsletter";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Courses />
      <About />
      <Banner/>
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Instructors />
      <Discover />
      <Blog />
      <Newsletter />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
