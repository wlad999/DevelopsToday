import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Posts.module.css";

const RetrievePost = props => {
  const { dataPost } = props;
  return (
    <div>
      {dataPost ? (
        <div className={styles.main}>
          {dataPost.title && <p>TITLE: {dataPost.title}</p>}
          {dataPost.id && <p>USER ID: {dataPost.id}</p>}
          {dataPost.body && <p>POST: {dataPost.body}</p>}
          {dataPost.author && <p>AUTOR: {dataPost.author}</p>}
          {dataPost.date && <p>DATA:{dataPost.date}</p>}
          <p>COMENTS:</p>
          {dataPost.comments && dataPost.comments.length > 0 ? (
            <div className={styles.list}>
              {dataPost.comments.map(com => (
                <div key={com.id}>
                  <div>id: {com.id}</div>
                  <div className={styles.com}>body: {com.body}</div>
                </div>
              ))}
            </div>
          ) : (
            <p>NO Coments</p>
          )}
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
