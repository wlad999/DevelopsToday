import React from "react";
import styles from "./Pagination.module.css";
const Pagination = props => {
  const { currentPage, pages, setCurrentPage } = props;
  return (
    <div>
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
    </div>
  );
};
export default Pagination;
