import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Posts.module.css";

const Alternative = () => {
  return (
    <div>
      <NavLink className={styles.mainEmpty} to={"/"}>
        What are you waiting for??? - click on something !!!
      </NavLink>
    </div>
  );
};
export default Alternative;
