import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";

const About = () => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.main}>
      <div className={styles.about}>
        <h3>About</h3>
      </div>
      <div>
        <p>Crafting Optimized & Responsive</p>
        <p> Web and Mobile Apps </p>
        <p>UI/UX, Strategy and Coding Experts</p>
      </div>
    </div>
    <Footer />
  </div>
);
export default About;
