import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Posts.module.css";

const RetrievePost = props => {
  const { dataPost, delPostThunk } = props;
  return (
    <div className={styles.main}>
      {dataPost.title && <p>TITLE: {dataPost.title}</p>}
      {dataPost.id && <p>USER ID: {dataPost.id}</p>}
      {dataPost.body && <p>POST: {dataPost.body}</p>}
      {dataPost.author && <p>AUTOR: {dataPost.author}</p>}
      {dataPost.date && <p>DATA:{dataPost.date}</p>}
      <NavLink className={styles.nav} to={`/`}>
        <button onClick={() => delPostThunk(dataPost.id)}>DELETE POST</button>
      </NavLink>
    </div>
  );
};
export default RetrievePost;
