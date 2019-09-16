import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
const Header = () => (
  <div className={styles.wrapper}>
    <NavLink to={"/"}>
      <img className={styles.logo} src={logo} alt="Logo" />
    </NavLink>
    <span className={styles.nav}>
      <NavLink className={styles.link} to={"/"}>
        Posts
      </NavLink>
      <NavLink className={styles.link} to={"/about"}>
        About
      </NavLink>
      <NavLink className={styles.link} to={"/contact"}>
        Contact
      </NavLink>
    </span>
  </div>
);
export default Header;
