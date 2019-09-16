import React from "react";
import styles from "./Posts.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Posts = props => {
  let [currentPage, setCurrentPage] = useState(props.currentPage);

  props.currentPageAC(currentPage);
  let pagesCount;
  let pageSize = 10;
  if (props.posts && props.posts.length > 0) {
    pagesCount = Math.ceil(props.posts.length / pageSize);
  }
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // let currentArrPosts = [];
  // if (props.posts && props.posts.length > 0) {
  //   console.log("ARR", props.posts.length);
  //   for (let i = 0; i < props.posts.length; i++) {
  //     if (i < currentPage * 10) {
  //       currentArrPosts.push(props.posts[i]);
  //     }
  //   }
  // }

  let arrOfPosts = props.posts.filter(el => {
    if (
      props.posts.indexOf(el) < currentPage * 10 &&
      props.posts.indexOf(el) >= currentPage * 10 - 10
    ) {
      return el;
    }
  });

  // console.log("currentArrPosts", currentArrPosts);

  return (
    <div>
      <div className={styles.box}>
        {pages.map(p => {
          return (
            <span
              key={p}
              className={currentPage === p ? styles.selectedPage : styles.page}
              onClick={e => {
                setCurrentPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
        {arrOfPosts.map(Post => {
          return (
            <div className={styles.page} key={Post.id}>
              <NavLink
                className={styles.nav}
                to={`/posts/${Post.id}`}
                // onClick={() => props.setSelectedPostAC(Post)
                // }
              >
                <div className={styles.text}>TITLE {Post.title}</div>
                <div className={styles.text}>AUTOR {Post.author}</div>
                {Post.date && (
                  <div className={styles.text}>PUBLISH DATA {Post.date}</div>
                )}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
