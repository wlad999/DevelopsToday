import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Contact.module.css";
import { NavLink } from "react-router-dom";

const Contact = () => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      <h3>CONTACT</h3>
      <h4>Ph: +1 (347) 708-0171</h4>
      <h4>Sales: sales@develops.today</h4>
      <h4>Jobs: hr@develops.today</h4>
      <h4>General Info: info@develops.today</h4>
      <div>
        <a href="http://develops.today/" target="_blank">
          http://develops.today
        </a>
      </div>
      <NavLink className={styles.nav} to={"/"}>
        <h3>Don`t thinking - call us right now!</h3>
      </NavLink>
    </main>
    <div className={styles.header}>
      <Footer />
    </div>
  </div>
);

export default Contact;
