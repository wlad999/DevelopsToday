import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";

const About = () => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.main}>
      <div className={styles.about}>
        <h2>About</h2>
      </div>
      <div className={styles.scroll}>
        <p>
          Zazend is an international outsourcing and outstaffing company. The
          main directions in which our company specializes are web development
          and development of mobile applications, as well as E-comerce. Together
          we are moving towards a goal and are a real family in which synergy
          reigns. Focus on long-term partnership and friendship with customers
          and employees. The Zazend family is a team of friendly, dedicated
          professionals who love to develop interesting projects. The growth of
          a person in professional and personal terms is what really inspires!
        </p>
        <p>We say “yes” of innovation and a new look at management!</p>
        <p>
          A democratic and flexible environment is a positive factor that makes
          it easy and pleasant to work in Zazend, while receiving only positive
          emotions.
        </p>
      </div>
      <h3>WELCOM ON BOARD!</h3>
    </div>
    <Footer className={styles.footer} />
  </div>
);
export default About;
