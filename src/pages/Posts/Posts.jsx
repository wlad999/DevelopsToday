import React from "react";
import styles from "./Posts.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

const Posts = props => {
  let [currentPage, setCurrentPage] = useState(props.currentPage);
  props.currentPageAC(currentPage);
  let pagesCount;
  let pageSize = 10;
  if (props.posts && props.posts.length > 0) {
    pagesCount = Math.ceil(props.posts.length / pageSize);
  }

  if (currentPage - pagesCount === 1) {
    setCurrentPage(currentPage - 1);
  }

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let reversPosts = props.posts.map(el => el).reverse();
  let arrOfPosts = reversPosts.filter(el => {
    if (
      reversPosts.indexOf(el) < currentPage * 10 &&
      reversPosts.indexOf(el) >= currentPage * 10 - 10
    ) {
      return el;
    }
  });

  return (
    <div className={styles.box}>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className={styles.scroll}>
        {arrOfPosts.map(post => {
          return (
            <div className={styles.page} key={post.id}>
              <NavLink className={styles.nav} to={`/posts/${post.id}`}>
                {post.title && (
                  <div className={styles.text}>TITLE {post.title}</div>
                )}
                {post.author && (
                  <div className={styles.text}>AUTOR {post.author}</div>
                )}
                {post.id && (
                  <div className={styles.text}>POST ID {post.id}</div>
                )}
                {post.date && (
                  <div className={styles.text}>PUBLISH DATA {post.date}</div>
                )}
                {post.body && (
                  <div className={styles.text}>POST {post.body}</div>
                )}
              </NavLink>
              <button onClick={() => props.delPostThunk(post.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
