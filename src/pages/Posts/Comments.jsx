import React from "react";
import styles from "./Posts.module.css";

const Comments = props => {
  const { comments } = props;
  return (
    <div>
      <p>COMENTS:</p>
      {comments && comments.length > 0 ? (
        <div className={styles.list}>
          {comments.map(com => (
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
  );
};
export default Comments;
