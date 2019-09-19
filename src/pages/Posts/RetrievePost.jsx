import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Posts.module.css";

const RetrievePost = props => {
  const { dataPost, comments } = props;
  return (
    <div>
      {dataPost ? (
        <div className={styles.main}>
          {dataPost.title && <p>TITLE: {dataPost.title}</p>}
          {dataPost.id && <p>USER ID: {dataPost.id}</p>}
          {dataPost.body && <p>POST: {dataPost.body}</p>}
          {dataPost.author && <p>AUTOR: {dataPost.author}</p>}
          {dataPost.date && <p>DATA:{dataPost.date}</p>}
        </div>
      ) : (
        <NavLink className={styles.mainEmpty} to={"/"}>
          What are you waiting for??? - click on something !!!
        </NavLink>
      )}
    </div>
  );
};
export default RetrievePost;
